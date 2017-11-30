import uuidv4 from 'uuid-v4';
import moment from 'moment';

import {
  SET_USERNAME,
  MERGE_LINKS,
  MERGE_COMMENTS,
  ADD_LINK,
  ADD_COMMENT,
  SET_VOTE,
  OPEN_COMMENT_MODAL,
  CLOSE_COMMENT_MODAL
} from '../constants/actionTypes'

export const setUsername = username => {
  return {
    type: SET_USERNAME,
    username
  };
};

export const mergeLinks = links => {
  return {
    type: MERGE_LINKS,
    links
  }
};

export const mergeComments = comments => {
  return {
    type: MERGE_COMMENTS,
    comments
  }
};

export const fetchAllData = () => {
  return (dispatch, getState) => {
    const fetches = [];

    const queueFetch = (name, url, actionCreator) => {
      const entities = getState()[name];
      if (entities && Object.keys(entities).length) {
        console.log(name + ' has already been fetched');
      } else {
        const fetchFunc = fetch(url)
          .then(response => response.json())
          .then(entities => dispatch(actionCreator(entities)))
          .catch(error => console.log('Error loading ' + name));
        fetches.push(fetchFunc);
      }  
    };

    queueFetch('links', 'api/links.json', mergeLinks);
    queueFetch('comments', 'api/comments.json', mergeComments);
    
    return Promise.all(fetches);
  }
};

export const addLink = link => {
  const id = uuidv4();
  const submitted = moment().unix();

  return {
    type: ADD_LINK,
    id,
    link: {
      ...link,
      id,
      submitted,
      votes: {},
      comments: []
    }
  };
};

export const addComment = (text, username, parentId) => {
  const id = uuidv4();
  const submitted = moment().unix();
  
  return {
    type: ADD_COMMENT,
    id,
    comment: {
      text,
      username,
      id,
      submitted,
      votes: {},
      comments: []
    },
    parentId
  };
};

export const setVote = (id, username, amount) => {
  return {
    type: SET_VOTE,
    id,
    username,
    amount
  };
};

export const openCommentModal = (parentId) => {
  return {
    type: OPEN_COMMENT_MODAL,
    parentId
  };
};

export const closeCommentModal = () => {
  return {
    type: CLOSE_COMMENT_MODAL
  };
};