import { ApplicationStatus } from "../../constants";
import { ApiStatus } from "./apiStatus.state";

export interface IGoalsDataState extends ApiStatus {
    goalId: number;
    title: string;
    details: string;
    dateCreated: Date;
    clientId: number;
}

export interface IGoalsState
{
    errorMessage?: string;
    status: ApplicationStatus;
    data: IGoalsDataState[];
}

export const goalsStateDataState: IGoalsState = {
    data: [],
    status: ApplicationStatus.INIT
};
