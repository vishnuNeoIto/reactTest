
import { combineReducers,compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {usersReducer} from './reducers';
import usersSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [ReduxThunk, sagaMiddleware];

const logger = (storeData) => (next) => (action) => {
  const result = next(action);
  console.log('state after dispatch', storeData())

  return result;
};

const rootReducer = combineReducers({
  usersReducer,
});
const middlewareEnhancer = applyMiddleware(sagaMiddleware, logger);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const createAppStore = (): any => {

    const Store = createStore(rootReducer, compose(applyMiddleware(...middlewares)));
    // use the same saga middleware that you have enhanced your store with
    sagaMiddleware.run(usersSaga);
    return Store;
    }

    export default createAppStore();