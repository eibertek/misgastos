import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import RegistryComponent from './registries.jsx';
import { setNewRegistry } from '../actions';

const mapDispatcher = (dispatch) => {
  return (dispatch) => ({
    setNewRegistry: bindActionCreators(setNewRegistry, dispatch),
  });
};

export default connect(null,mapDispatcher)(RegistryComponent);