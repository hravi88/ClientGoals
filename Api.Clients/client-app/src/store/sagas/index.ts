import { fork } from 'redux-saga/effects';

import { clientDataSaga } from './clientsData.saga';
import { goalsDataSaga } from './goalsData.saga';

// eslint-disable-next-line import/no-anonymous-default-export
export default function* () {
    yield fork(clientDataSaga);
    yield fork(goalsDataSaga);
}
