import { ICreateGoalResponse, IGoalsPayload, IGoalsRequestPayload } from "../models/goalsData.model";
import * as routes from '../constants';

import * as fetch from './FetchApi';
import { filteredContent } from "../utils/contentUtils";

interface IGoalsDataService {
    getGoalsData: (data: number) => Promise<IGoalsPayload>;
    postGoalsData: (data: IGoalsRequestPayload) => Promise<ICreateGoalResponse>;
}

class GoalsDataService implements IGoalsDataService {
    public getGoalsData = (data: number): Promise<IGoalsPayload> => {
        const url = filteredContent(routes.BASE_PATH.concat(routes.GET_GOALS_URL), [data.toString()]);
        return fetch.post(url, data).then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return fetch.parseResponse<IGoalsPayload>(response);
        });
    }

    public postGoalsData = async function (data: IGoalsRequestPayload): Promise<ICreateGoalResponse> {
        const url = routes.BASE_PATH.concat(routes.ADD_GOALS_URL);
        const response = await fetch.post(url, data);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return await fetch.parseResponse<ICreateGoalResponse>(response);
    }
}

const goalsDataService = new GoalsDataService();
export default goalsDataService;
