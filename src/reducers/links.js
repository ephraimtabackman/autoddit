import { MERGE_LINKS, ADD_LINK, ADD_COMMENT, SET_VOTE } from '../constants/actionTypes.js';
import { applyVote, attachComment } from './utils';

const links = (state = {}, action) => {
  switch (action.type) {
    case MERGE_LINKS:
      return {
        ...state,
        ...action.links
      };
    case ADD_LINK:
      return {
        ...state,
        [action.id]: action.link
      };
    case ADD_COMMENT:
      return attachComment(state, action);
    case SET_VOTE:
      return applyVote(state, action);
    default:
      return state;
  }
}

export default links;