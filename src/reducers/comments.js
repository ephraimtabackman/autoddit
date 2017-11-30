import { MERGE_COMMENTS, ADD_COMMENT, SET_VOTE } from '../constants/actionTypes.js';
import { applyVote, attachComment } from './utils';

const comments = (state = {}, action) => {
  switch (action.type) {
    case MERGE_COMMENTS:
      return {
        ...state,
        ...action.comments
      };
    case ADD_COMMENT:
      const stateWithNewComment = {
        ...state,
        [action.id]: action.comment
      }
      return attachComment(stateWithNewComment, action);
    case SET_VOTE:
      return applyVote(state, action);
    default:
      return state;
  }
}

export default comments;