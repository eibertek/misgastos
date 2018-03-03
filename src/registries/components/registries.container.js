import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegistryComponent from './registries.jsx';
import { setNewRegistry, editRegistry } from '../actions';

const mapDispatcher = (dispatch) => {
  return (dispatch) => ({
    setNewRegistry: bindActionCreators(setNewRegistry, dispatch),
    editRegistry: bindActionCreators(editRegistry, dispatch),
  });
};

export default connect(null,mapDispatcher)(RegistryComponent);