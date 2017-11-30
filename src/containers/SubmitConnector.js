import { connect } from 'react-redux'
import Submit from '../components/Submit'
import { addLink } from '../actions';

const mapStateToProps = ({username}) => ({username});
const mapDispatchToProps = {addLink};
const SubmitConnector = connect(mapStateToProps, mapDispatchToProps)(Submit);

export default SubmitConnector;