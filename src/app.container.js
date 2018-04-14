import { connect } from 'react-redux';
import App from './app.jsx';
import selectors from 'src/Dashboard/selectors/dashboard.selector';

const mapStateToProps = (state) => ({
  loadData: selectors.countrySelector(state),
});

export default connect(mapStateToProps,null)(App);