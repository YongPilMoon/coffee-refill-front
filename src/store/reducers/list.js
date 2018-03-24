import { handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import * as types from "../actions/ActionTypes";
// initial state
const initialState = Map({
  posts: List(),
  lastPage: null
});

// reducer
export default handleActions({
  [types.GET_POST_LIST]: (state, action) => {
    const posts = action.payload.data;
    const lastPage = parseInt(action.payload.headers['last-page'], 10);
    return state.set('posts', fromJS(posts)).set('lastPage', lastPage)
  }
}, initialState)