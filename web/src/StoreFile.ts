import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from './RootReducer';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './RootSaga';
import { History } from 'history';
import { routerMiddleware } from 'connected-react-router';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(history: History) {

  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    RootReducer(history),
    composeWithDevTools(middleWareEnhancer)
  );
  sagaMiddleware.run(RootSaga);

  return store;
}

