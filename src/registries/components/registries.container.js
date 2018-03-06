import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegistryComponent from './registries.jsx';
import { setNewRegistry, editRegistry, deleteRegistry } from '../actions';
import selectors from '../../Dashboard/selectors/dashboard.selector';

const mapStateToProps = (state) => ({
  accounts: selectors.getAccounts(state),
});

const mapDispatcher = () => {
  return (dispatch) => ({
    setNewRegistry: bindActionCreators(setNewRegistry, dispatch),
    editRegistry: bindActionCreators(editRegistry, dispatch),
    deleteRegistry: bindActionCreators(deleteRegistry, dispatch),
  });
};

export default connect(mapStateToProps,mapDispatcher)(RegistryComponent);