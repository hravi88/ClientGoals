import { combineReducers } from "redux";
import { all } from 'redux-saga/effects';
import * as fromReducer from './reducers';
import * as fromState from './states';

import {
    LoadClientDataAction
} from './actions';
import RootSaga from './sagas';

export type RootAction = LoadClientDataAction;

export interface RootState {
    clientData: fromState.IClientsState;
    goalsData: fromState.IGoalsState;
}

export const rootReducer = () => combineReducers<RootState>({
    clientData: fromReducer.clientDataReducer,
    goalsData: fromReducer.goalsDataReducer
} as any);

export function* rootSaga() {
    yield all([RootSaga()])
}
