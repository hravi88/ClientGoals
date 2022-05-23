import { IClientsPayload } from "../models/clientsData.model";
import * as routes from '../constants';

import * as fetch from './FetchApi';

interface IClientDataService {
    getClientsData: () => Promise<IClientsPayload>;
}

class ClientDataService implements IClientDataService {
    public getClientsData = async (): Promise<IClientsPayload> => {
        const url = routes.BASE_PATH.concat(routes.GET_CLIENTS_URL);
        const response = await fetch.get(url);
        if (!response.ok) {
            throw Error(response.statusText);
        } else {
            return fetch.parseResponse<IClientsPayload>(response);
        }
    }
}

const clientDataService = new ClientDataService();
export default clientDataService;
