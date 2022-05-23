import { ApiStatus } from "./props.model";

export interface IGoalsData {
    goalId: number;
    title: string;
    details: string;
    dateCreated: Date;
}

export interface IGoalsPayload extends ApiStatus {
    data?: IGoalsData[];
    errorMessage?: string;
    status: string;
}

export interface ICreateGoalResponse extends ApiStatus {
    data: boolean;
    errorMessage?: string;
    status: string;
}

export interface IGoalsRequestPayload {
    title: string;
    details: string;
    dateCreated: Date;
    clientId: number;
}
