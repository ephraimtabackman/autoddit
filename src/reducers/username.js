import {SET_USERNAME} from '../constants/actionTypes.js';

const username = (state = '', action) => {
  switch (action.type) {
    case SET_USERNAME:
      return action.username
    default:
      return state
  }
}

export default username