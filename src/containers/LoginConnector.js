import { connect } from 'react-redux'
import Login from '../components/Login'
import { setUsername } from '../actions';

const mapDispatchToProps = {setUsername};
const LoginConnector = connect(null, mapDispatchToProps)(Login);

export default LoginConnector;