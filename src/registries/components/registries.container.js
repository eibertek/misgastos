import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegistryComponent from './registries.jsx';
import { setNewRegistry, editRegistry, deleteRegistry } from '../actions';

const mapDispatcher = (dispatch) => {
  return (dispatch) => ({
    setNewRegistry: bindActionCreators(setNewRegistry, dispatch),
    editRegistry: bindActionCreators(editRegistry, dispatch),
    deleteRegistry: bindActionCreators(deleteRegistry, dispatch),
  });
};

export default connect(null,mapDispatcher)(RegistryComponent);