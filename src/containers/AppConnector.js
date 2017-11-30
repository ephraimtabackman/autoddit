import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import App from '../components/App'
import { fetchAllData } from '../actions';

const mapStateToProps = ({username}) => ({username});
const mapDispatchToProps = {fetchAllData};
const AppConnector = withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

export default AppConnector;