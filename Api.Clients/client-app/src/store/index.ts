import { compose, applyMiddleware, legacy_createStore } from 'redux';

import createSagaMiddleware from 'redux-saga';


import { rootReducer, rootSaga, RootState } from './rootStore';

const composeEnhancers =
    (window &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const configureStore = (initialState?: RootState) => {
    const sagaMiddleware = createSagaMiddleware();


    // configure middlewares
    const middlewares = [sagaMiddleware];

    // compose enhancers
    const enhancer = composeEnhancers(applyMiddleware(...middlewares));

    const storeInstance = legacy_createStore(rootReducer(), initialState, enhancer);

    sagaMiddleware.run(rootSaga);

    return storeInstance;
}

// pass an optional param to rehydrate state on app start
const store = () => {
    return configureStore();
}

// export store singleton instance
export default store;
