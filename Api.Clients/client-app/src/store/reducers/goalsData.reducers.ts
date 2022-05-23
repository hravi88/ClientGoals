/* eslint-disable no-fallthrough */
import { getType } from "typesafe-actions";
import { ApiStatus } from "../../constants";
import { LoadGoalsDataActions, LoadGoalsDataAction } from "../actions/goalsData.actions";
import { IGoalsState, goalsStateDataState } from "../states/goalsData.state";

export const goalsDataReducer = 
(state: IGoalsState = goalsStateDataState, action: LoadGoalsDataAction): IGoalsState => {
    switch(action.type) {
        case getType(LoadGoalsDataActions.LOAD_GOALS_DATA_REQUEST.request):
            return {
                ...state,
            }
        case getType(LoadGoalsDataActions.LOAD_GOALS_DATA_REQUEST.success):
            if(action.payload && action.payload.data && action.payload.status === ApiStatus.success) {
                return {
                    ...state,
                    data: action.payload.data,
                    status: action.payload.status
                }
            }
            default: 
            return state;
          
    }
};


