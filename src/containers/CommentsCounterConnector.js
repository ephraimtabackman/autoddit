import { connect } from 'react-redux'
import CommentsCounter from '../components/CommentsCounter'

const mapStateToProps = ({comments}) => ({comments});

const CommentsCounterConnector = connect(mapStateToProps)(CommentsCounter);

export default CommentsCounterConnector;