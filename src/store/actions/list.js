import { GET_POST_LIST } from "./ActionTypes";
import * as api from '../../lib/api';

export const getPostList = () => async dispatch => {
  const result = await api.getPostList("","1");
  dispatch({
    type: GET_POST_LIST,
    payload: result.data
  });
};