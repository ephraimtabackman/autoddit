import { combineReducers } from 'redux';
import username from './username';
import links from './links';
import comments from './comments';
import addingCommentTo from './addingCommentTo';

const rootReducer = combineReducers({
  username,
  links,
  comments,
  addingCommentTo
});

export default rootReducer;