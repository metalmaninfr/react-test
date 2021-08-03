import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";

import rootSaga from "./rootSagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const bindMiddleware = middleware => {
  return composeWithDevTools(applyMiddleware(...middleware));
};

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    bindMiddleware([sagaMiddleware, ...middlewares]),
  );

  (store).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};


export const store = makeStore();
