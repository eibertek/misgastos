import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CurrencyComponent from './currencies.jsx';
import selectors from 'src/Dashboard/selectors/dashboard.selector';
import { setNewCurrency, editCurrency, deleteCurrency } from '../actions';

const mapStateToProps = (state) => {
 return {
   currencies: selectors.getCurrencies(state)
 };
};

const mapDispatcher = () => {
  return (dispatch) => ({
    setNewCurrency: bindActionCreators(setNewCurrency, dispatch),
    edit: bindActionCreators(editCurrency, dispatch),
    delete: bindActionCreators(deleteCurrency, dispatch),
  });
};

export default connect(mapStateToProps,mapDispatcher)(CurrencyComponent);