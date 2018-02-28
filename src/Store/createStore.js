import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import initialStore from './initialStore';
import RegistriesReducer from '../registries/reducers';
import SetupReducers from '../FirstTime/reducers/FirstTime.reducer';
import dashboardReducers from '../Dashboard/reducers/Dashboard.reducer';
import rootSaga from './rootSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({userSetup: SetupReducers, registries: RegistriesReducer, dashboard: dashboardReducers}),
  initialStore,
  composeEnhancers(applyMiddleware(thunk,sagaMiddleware))
  );

sagaMiddleware.run(rootSaga)


export default store;
