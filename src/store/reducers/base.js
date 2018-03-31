import { Map } from 'immutable';
import { handleActions } from 'redux-actions';
export const SHOW_MODAL = 'base/SHOW_MODAL';
export const HIDE_MODAL = 'base/HIDE_MODAL';

const initialState = Map({
  modal: Map({
    remove: false,
    login: false
  })
});

export default handleActions({
  [SHOW_MODAL]: (state, action) => {
    const { payload: modalName } = action;
    return state.setIn(['modal', modalName], true);
  },
  [HIDE_MODAL]: (state, action) => {
    const { payload: modalName } = action;
    return state.setIn(['modal', modalName], false);
  }
}, initialState)