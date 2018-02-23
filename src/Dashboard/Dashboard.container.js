import { connect } from 'react-redux';
import Dashboard from './Dashboard.jsx';
import actions from './actions/dashboard.actions';
import selectors from './selectors/dashboard.selector';

const mapsProps = (state) => {
  return {
    country: selectors.countrySelector(state),
    currency: selectors.currencySelector(state),
    dolar: selectors.dolarSelector(state),
    registries: selectors.getRegistries(state)
  }
}

export default connect(mapsProps,null)(Dashboard);
