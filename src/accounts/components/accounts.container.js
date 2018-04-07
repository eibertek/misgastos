import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import selectors from 'src/Dashboard/selectors/dashboard.selector';
import AccountComponent from './accounts.jsx';
import { setNewAccount, editAccount, deleteAccount } from '../actions';

const mapsProps = (state) => ({
  currencies: selectors.getCurrencies(state),
});


const mapDispatcher = () => {
  return (dispatch) => ({
    setNewAccount: bindActionCreators(setNewAccount, dispatch),
    editAccount: bindActionCreators(editAccount, dispatch),
    deleteAccount: bindActionCreators(deleteAccount, dispatch),
  });
};

export default connect(mapsProps, mapDispatcher)(AccountComponent);