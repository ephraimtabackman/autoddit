import { connect } from 'react-redux'
import LinkList from '../components/LinkList'

const mapStateToProps = ({links}) => ({links});

const LinkListConnector = connect(mapStateToProps)(LinkList);

export default LinkListConnector;