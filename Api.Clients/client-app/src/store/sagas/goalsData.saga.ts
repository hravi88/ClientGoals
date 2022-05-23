import { call, put, takeEvery } from 'redux-saga/effects';
import { ApiStatus, ApplicationStatus } from '../../constants';
import { ICreateGoalResponse, IGoalsPayload, IGoalsRequestPayload } from '../../models/goalsData.model';
import GoalsDataService from '../../services/goalsData.service';
import { LoadClientDataActions, LoadGoalsDataActions } from '../actions';

export function* getGoalsData(action: ReturnType<typeof LoadGoalsDataActions.LOAD_GOALS_DATA_REQUEST.request>) {
    try {
        const GoalsData: IGoalsPayload = yield call(GoalsDataService.getGoalsData, action.payload);
        if(GoalsData && GoalsData.status === ApiStatus.success) {
            yield put(LoadGoalsDataActions.LOAD_GOALS_DATA_REQUEST.success(GoalsData));
            yield put(LoadClientDataActions.UPDATE_STATUS(ApplicationStatus.SUCCESS));
        }
    } catch (error) {
        const apiError = error as Error;
        const response: IGoalsPayload = {
            errorMessage: apiError.message,
            status: ApiStatus.error
        };
        yield put(LoadGoalsDataActions.LOAD_GOALS_DATA_REQUEST.failure(response, error));
        yield put(LoadClientDataActions.UPDATE_STATUS(ApplicationStatus.ERROR));
    }
}

export function* postGoalsData(action: ReturnType<typeof LoadGoalsDataActions.CREATE_GOALS_DATA_REQUEST.request>) {
    try {
        const request: IGoalsRequestPayload = {
            clientId: action.payload.clientId,
            title: action.payload.title,
            details: action.payload.details,
            dateCreated: action.payload.dateCreated
        }

        const response:ICreateGoalResponse = yield call(GoalsDataService.postGoalsData, request);
        yield put(LoadClientDataActions.UPDATE_STATUS(ApplicationStatus.INIT));
        if(response && response.status === ApiStatus.success) {
            yield put(LoadGoalsDataActions.CREATE_GOALS_DATA_REQUEST.success(response));
            yield put(LoadClientDataActions.UPDATE_STATUS(ApplicationStatus.SUCCESS));
        }
    } catch (error) {
        const apiError = error as Error;
        const response: any = {
            errorMessage: apiError.message,
            status: ApiStatus.error
        };
        yield put(LoadGoalsDataActions.CREATE_GOALS_DATA_REQUEST.failure(response, error));
        yield put(LoadClientDataActions.UPDATE_STATUS(ApplicationStatus.ERROR));
    }
}

export function* goalsDataSaga() {
    yield takeEvery(LoadGoalsDataActions.LOAD_GOALS_DATA_REQUEST.request, getGoalsData);
    yield takeEvery(LoadGoalsDataActions.CREATE_GOALS_DATA_REQUEST.request, postGoalsData);
}
