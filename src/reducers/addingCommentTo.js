import {
  OPEN_COMMENT_MODAL,
  CLOSE_COMMENT_MODAL
} from '../constants/actionTypes.js';

const addingCommentTo = (state = '', action) => {
  switch (action.type) {
    case OPEN_COMMENT_MODAL:
      return action.parentId
    case CLOSE_COMMENT_MODAL:
      return ''
    default:
      return state
  }
}

export default addingCommentTo