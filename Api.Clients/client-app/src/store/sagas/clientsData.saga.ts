import { call, put, takeEvery } from 'redux-saga/effects';
import { ApiStatus, ApplicationStatus } from '../../constants';
import { IClientsPayload } from '../../models/clientsData.model';
import clientDataService from '../../services/clientsData.service';
import { LoadClientDataActions } from '../actions';

export function* getClientsData() {
    try {
        const clientsData: IClientsPayload = yield call(clientDataService.getClientsData);
        if(clientsData && clientsData.status === ApiStatus.success) {
            yield put(LoadClientDataActions.LOAD_CLIENT_DATA_REQUEST.success(clientsData));
            yield put(LoadClientDataActions.UPDATE_STATUS(ApplicationStatus.SUCCESS));
        }
    } catch (error) {
        const apiError = error as Error;
        const response: IClientsPayload = {
            errorMessage: apiError.message,
            status: ApiStatus.error
        };
        yield put(LoadClientDataActions.LOAD_CLIENT_DATA_REQUEST.failure(response, error));
        yield put(LoadClientDataActions.UPDATE_STATUS(ApplicationStatus.ERROR));
    }
}

export function* clientDataSaga() {
    yield takeEvery(LoadClientDataActions.LOAD_CLIENT_DATA_REQUEST.request, getClientsData);
}
