export const BASE_PATH = 'https://localhost:7156';

/* Service URL */
export const GET_CLIENTS_URL = '/api/clients/basicview';
export const GET_GOALS_URL = '/api/clients/goals';
export const ADD_GOALS_URL = '/api/clients/addGoals';
export const EDIT_GOALS_URL = '/api/clients/editGoals';

export const ApiStatus = {
    success: "success",
    error: "error"
}

export enum ApplicationStatus {
    INIT,
    ERROR,
    SUCCESS
}
