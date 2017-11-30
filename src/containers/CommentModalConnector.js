import { connect } from 'react-redux'
import CommentModal from '../components/CommentModal'
import { addComment, closeCommentModal } from '../actions';

const mapStateToProps = ({username, addingCommentTo}) => ({username, addingCommentTo});
const mapDispatchToProps = {addComment, closeCommentModal};
const CommentModalConnector = connect(mapStateToProps, mapDispatchToProps)(CommentModal);

export default CommentModalConnector;