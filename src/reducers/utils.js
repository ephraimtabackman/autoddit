export const applyVote = (state, action) => {
  const entity = state[action.id];
  if (entity) {
    const votes = {
      ...entity.votes,
      [action.username]: action.amount
    };

    const entityWithVote = {
      ...entity,
      votes
    }

    return {
      ...state,
      [action.id]: entityWithVote
    }
  } else {
    return state;
  }
}

/**
 * Find link (or comment, depending on which state key
 * we are reducing) with id of action.parentId.
 * Append action.id to its comments array
 */
export const attachComment = (state, action) => {
  const entity = state[action.parentId];
  if (entity) {
    const comments = [
      ...entity.comments, 
      action.id
    ];

    const entityWithUpdatedComments = {
      ...entity,
      comments
    };

    return {
      ...state,
      [action.parentId]: entityWithUpdatedComments
    }
  } else {
    return state
  }
}