import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {logger} from '../util/reduxUtils'

import rootReducer from './reducers'
import rootSagas from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();


// mount it on the Store
export default createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, logger)
);

// then run the saga
sagaMiddleware.run(rootSagas);
