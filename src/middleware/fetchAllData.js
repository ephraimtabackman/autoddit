import { mergeLinks, mergeComments } from '../actions';
import { LOAD_INITIAL_DATA } from '../constants/actionTypes';

export default store => next => action => {
  next(action);

  if (action.type != LOAD_INITIAL_DATA) {
    return;
  }

  const {dispatch, getState} = store;

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
};