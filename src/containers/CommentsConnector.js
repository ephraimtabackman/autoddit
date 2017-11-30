import { connect } from 'react-redux'
import Comments from '../components/Comments'

const mapStateToProps = ({comments}, {ids}) => {
  const mappedComments = ids.map(id => comments[id]);
  
  return {
    comments: mappedComments
  }
};

const CommentsConnector = connect(mapStateToProps)(Comments);

export default CommentsConnector;