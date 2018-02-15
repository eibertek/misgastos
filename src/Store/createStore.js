import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import initialStore from './initialStore';
import reducers from '../countries/components/CountrySelect/Reducers';
import SetupReducers from '../FirstTime/reducers/FirstTime.reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({reducers, userSetup: SetupReducers}),
  initialStore,
  composeEnhancers(applyMiddleware(thunk))
  );


export default store;
