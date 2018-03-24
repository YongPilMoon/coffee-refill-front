import { GET_POST } from "./ActionTypes";
import * as api from '../../lib/api';

export const getPost = (id) => async dispatch => {
  try {
    const result = await api.getPost(id);
    dispatch({
      type: GET_POST,
      payload: result.data
    });
  } catch(e) {
    return console.log(e);
  }
};
