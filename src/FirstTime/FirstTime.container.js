import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FirstTime from './FirstTime.jsx';
import actions from './actions';

const mapStatetoProps = (state) => ({

});

const mapDispatcher = (dispatch) => {
  return (dispatch) => ({
    saveFirstTime: bindActionCreators(actions.setFirstTimeData, dispatch),
  });
};

export default connect(null,mapDispatcher)(FirstTime);