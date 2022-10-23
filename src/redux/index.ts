import { post, user } from "../pages/mainPage/interfaces";

const initialState: reduxInitialState = {
    users: [],
    posts: []
};

const SET_USERS = "SET_USERS"
const SET_POSTS = "SET_POSTS"

interface reducerObjInt {
    payload: any,
    type: string
}

export interface reduxInitialState {
    users: user[],
    posts: post[]
}

const reducer = (state = initialState, { payload, type }: reducerObjInt) => {
    switch (type) {
        case SET_USERS:
            return { ...state, users: payload };
        case SET_POSTS:
            return { ...state, posts: payload };
        default:
            return state;
    }
};

export const setUsersInStore = (dispatch: any, payload: user[]) => {
    dispatch({
        type: SET_USERS,
        payload
    })
}

export const setPostsInStore = (dispatch: any, payload: post[]) => {
    dispatch({
        type: SET_POSTS,
        payload
    })
}

export default reducer;
