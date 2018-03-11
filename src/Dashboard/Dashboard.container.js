import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dashboard from './Dashboard.jsx';
import { toggleEditButtons } from '../registries/actions/';
import selectors from './selectors/dashboard.selector';

const mapsProps = (state) => {
  return {
    country: selectors.countrySelector(state),
    currency: selectors.currencySelector(state),
    dolar: selectors.dolarSelector(state),
    registries: selectors.getRegistries(state),
    accounts: selectors.getAccounts(state),
    editModes: selectors.getEditMode(state)
  }
}

const dispatchToProps = dispatch => {
  return dispatch => ({
    toggleEditButtons: bindActionCreators(toggleEditButtons, dispatch),
  });
};

export default connect(mapsProps,dispatchToProps)(Dashboard);
