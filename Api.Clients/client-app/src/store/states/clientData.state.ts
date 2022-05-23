import { ApplicationStatus } from "../../constants";
import { ApiStatus } from "./apiStatus.state";

export interface IClientDataState extends ApiStatus {
    clientId: number;
    firstName: string;
    lastName: string;
    dateCreated: Date;
}

export interface IClientsState
{
    errorMessage?: string;
    status: ApplicationStatus;
    data: IClientDataState[]
}

export const clientDataState: IClientsState = {
    data: [],
    status: ApplicationStatus.INIT
};
