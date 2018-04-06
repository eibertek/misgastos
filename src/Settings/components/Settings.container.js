import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Settings from './Settings.jsx';
import actions from '../actions';
import { toggleEditButtons } from 'src/registries/actions/';
import selectors from 'src/Dashboard/selectors/dashboard.selector';

const mapStateToProps = (state) => ({
    store: state,
    editModes: selectors.getEditMode(state)
  });

const mapDispatcher = (dispatch) => {
  return (dispatch) => ({
    saveCountry: bindActionCreators(actions.setCountry, dispatch),
    toggleEditButtons: bindActionCreators(toggleEditButtons, dispatch),
  });
};

export default connect(mapStateToProps,mapDispatcher)(Settings);