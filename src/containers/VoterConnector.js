import { connect } from 'react-redux'
import Voter from '../components/Voter'
import { setVote } from '../actions';

const mapStateToProps = ({username}) => ({username});
const mapDispatchToProps = {setVote};
const VoterConnector = connect(mapStateToProps, mapDispatchToProps)(Voter);

export default VoterConnector;