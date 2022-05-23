import { ActionType, createAsyncAction } from 'typesafe-actions';
import { IGoalsRequestPayload } from '../../models/goalsData.model';
import { LoadGoalsDataTypes } from './types/LoadGoalsDataType';

export const LoadGoalsDataActions = {
    LOAD_GOALS_DATA_REQUEST: createAsyncAction(
        LoadGoalsDataTypes.LOAD_GOALS_DATA_REQUEST,
        LoadGoalsDataTypes.LOAD_GOALS_DATA_SUCCESS,
        LoadGoalsDataTypes.LOAD_GOALS_DATA_FAILURE)<number, any>(),
        CREATE_GOALS_DATA_REQUEST: createAsyncAction(
            LoadGoalsDataTypes.CREATE_GOALS_DATA_REQUEST,
            LoadGoalsDataTypes.CREATE_GOALS_DATA_SUCCESS,
            LoadGoalsDataTypes.CREATE_GOALS_DATA_FAILURE)<IGoalsRequestPayload, any>(),
};

export type LoadGoalsDataAction = ActionType<typeof LoadGoalsDataActions>;
