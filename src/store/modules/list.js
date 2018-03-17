import { createAction, handleActions } from 'redux-actions';

import { Map, List, fromJS } from 'immutable';

import * as api from 'lib/api';

// action types
const GET_POST_LIST = 'list/GET_POST_LIST';

// action creators
export const getPostList = () => async dispatch => {
    const result = await api.getPostList("hello","1");
    dispatch({
        type: GET_POST_LIST,
        payload: result.data
    });
};


// initial state

const initialState = Map({
    posts: List(),
    lastPage: null
});

// reducer
export default handleActions({
        [GET_POST_LIST]: (state, action) => {
            const { data: posts } = action.payload;
            console.log("payload", action.payload);
            // const lastPage = action.payload.headers['last-page'];
            return state.set('posts', fromJS(posts))
                        // .set('lastPage', lastPage)
        }
}, initialState)