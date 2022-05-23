import { getType } from "typesafe-actions";
import { ApiStatus, ApplicationStatus } from "../../constants";
import { LoadClientDataActions, LoadClientDataAction } from "../actions/clientData.actions";
import { IClientsState, clientDataState } from "../states/clientData.state";

export const clientDataReducer = (state: IClientsState = clientDataState, action: LoadClientDataAction): IClientsState => {
    switch(action.type) {
        case getType(LoadClientDataActions.LOAD_CLIENT_DATA_REQUEST.request):
            return {
                ...state,
            }
        case getType(LoadClientDataActions.LOAD_CLIENT_DATA_REQUEST.success):
            if(action.payload && action.payload.data && action.payload.status === ApiStatus.success) {
                return {
                    ...state,
                    data: action.payload.data,
                    status: ApplicationStatus.SUCCESS,
                    errorMessage: action.payload.errorMessage
                }
            }
            if(action.payload.errorMessage) 
           return {
               ...state,
               errorMessage: action.payload.errorMessage
           }
            // eslint-disable-next-line no-fallthrough
            default: 
            return state;
          
    }
};


