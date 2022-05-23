import { ActionType, createAsyncAction, createAction } from 'typesafe-actions';
import { ApplicationStatus } from '../../constants';
import { IClientsPayload } from '../../models/clientsData.model';
import { LoadClientDataType } from './types/LoadClientDataType';

export const LoadClientDataActions = {
    UPDATE_STATUS: createAction(LoadClientDataType.UPDATE_STATUS, (payload: ApplicationStatus) => payload)(),
    LOAD_CLIENT_DATA_REQUEST: createAsyncAction(
        LoadClientDataType.LOAD_CLIENT_DATA_REQUEST,
        LoadClientDataType.LOAD_CLIENT_DATA_SUCCESS,
        LoadClientDataType.LOAD_CLIENT_DATA_FAILURE)<{}, IClientsPayload>(),
};

export type LoadClientDataAction = ActionType<typeof LoadClientDataActions>;
