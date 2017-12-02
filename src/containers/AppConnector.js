import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import App from '../components/App'
import { fetchInitialData } from '../actions';

const mapStateToProps = ({username}) => ({username});
const mapDispatchToProps = {fetchInitialData};
const AppConnector = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

export default AppConnector;