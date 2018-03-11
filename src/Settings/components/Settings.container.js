import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Settings from './Settings.jsx';
import actions from '../actions';

const mapStateToProps = (state) => ({
    store: state,
  });

const mapDispatcher = (dispatch) => {
  return (dispatch) => ({
    saveCountry: bindActionCreators(actions.setCountry, dispatch),
  });
};

export default connect(mapStateToProps,mapDispatcher)(Settings);