import { EDITOR_CHANGE_INPUT, EDITOR_INITIALIZE, EDITOR_WRITE_POST } from "./ActionTypes";
import * as api from '../../lib/api';

// action creators
export const initialize = () => ({
  type: EDITOR_INITIALIZE
});

export const changeInput = (payload) => {
  return { type: EDITOR_CHANGE_INPUT,
    payload
  }
};

export const writePost = (post) => async dispatch => {
  const result = await api.writePost(post);
  dispatch({
    type: EDITOR_WRITE_POST,
    payload: result.data
  });
};
