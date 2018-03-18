import {handleActions} from 'redux-actions';
import {Map} from 'immutable';
import * as types from '../actions/ActionTypes';

// initial state

const initialState = Map({
  title : '',
  markdown : '',
  tags : '',
  postId : null
});

// reducer
export default handleActions({
  [types.EDITOR_INITIALIZE] : (state, action) => initialState,
  [types.EDITOR_CHANGE_INPUT] : (state, action) => {
    const {name, value} = action.payload;
    return state.set(name, value);
  },
  [types.EDITOR_WRITE_POST]: (state, action) => {
    const {_id } = action.payload.data;
    return state.set('postId', _id);
  }
}, initialState)