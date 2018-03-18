import {handleActions} from 'redux-actions';
import {fromJS, Map} from 'immutable';
import * as types from '../actions/ActionTypes';

// initial state
const initialState = Map({
  post: Map({})
});

// reducer
export default handleActions({
  [types.GET_POST]: (state, action) => {
    const post = action.payload;
    return state.set('post', fromJS(post))
  }
}, initialState)