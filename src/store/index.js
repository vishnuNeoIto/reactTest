import { applyMiddleware, compose, createStore } from 'redux'
// import thunkMiddleware from 'redux-thunk'
import { createContext } from 'react';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// import monitorReducersEnhancer from './enhancers/monitorReducers'    
import loggerMiddleware from './users/middleware/logger'
import rootReducer from './reducer'
import * as actions from './actions';
import rootSaga from './saga';

const logger = (storeData) => (next) => (action) => {
  const result = next(action);
  return result;
};
const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(sagaMiddleware, logger);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

export const myStore = createStore(rootReducer, composedEnhancers);
sagaMiddleware.run(rootSaga);


export default {
    myStore,
    actions
}