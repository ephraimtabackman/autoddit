import { connect } from 'react-redux'
import AddCommentButton from '../components/AddCommentButton'
import { openCommentModal } from '../actions';

const mapDispatchToProps = {openCommentModal};
const AddCommentButtonConnector = connect(null, mapDispatchToProps)(AddCommentButton);

export default AddCommentButtonConnector;