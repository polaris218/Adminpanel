import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducer/rootReducer';
import sagaWatchers from '../saga/sagas';

const sagaMiddleware = createSagaMiddleware();
const configureStore = initialState => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      sagaMiddleware,
    ),
  );
  sagaMiddleware.run(sagaWatchers);
  return store;
};

export default configureStore;