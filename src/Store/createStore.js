import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import initialStore from './initialStore';
import reducers from '../countries/components/CountrySelect/Reducers';
import SetupReducers from '../FirstTime/reducers/FirstTime.reducer';
import rootSaga from '../FirstTime/sagas/firstTime.saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({reducers, userSetup: SetupReducers}),
  initialStore,
  composeEnhancers(applyMiddleware(thunk,sagaMiddleware))
  );

sagaMiddleware.run(rootSaga)


export default store;
