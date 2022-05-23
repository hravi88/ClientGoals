import { ApiStatus } from "./props.model";

export interface IClientData {
    clientId: number,
    firstName: string,
    lastName: string,
    dateCreated: Date
}

export interface IClientsPayload extends ApiStatus {
    data?: IClientData[],
    errorMessage?: string
    status: string
}

