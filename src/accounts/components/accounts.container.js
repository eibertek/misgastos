import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AccountComponent from './accounts.jsx';
import { setNewAccount, editAccount, deleteAccount } from '../actions';

const mapDispatcher = () => {
  return (dispatch) => ({
    setNewAccount: bindActionCreators(setNewAccount, dispatch),
    editAccount: bindActionCreators(editAccount, dispatch),
    deleteAccount: bindActionCreators(deleteAccount, dispatch),
  });
};

export default connect(null,mapDispatcher)(AccountComponent);