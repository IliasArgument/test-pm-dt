import {
    GET_USERS_DATA,
    SET_IS_LOADING,
    SET_IS_ERROR
} from '../constatns';

const initialState = {
    users: [],
    isLoading: false,
    isError: false,
}

function users(state = initialState, action) {
    let { type, payload } = action;

    switch (type) {
        case GET_USERS_DATA:
            return { ...state, users: payload };
        case SET_IS_LOADING:
            return { ...state, isLoading: payload };
        case SET_IS_ERROR:
            return { ...state, isError: payload };
        default:
            return state;
    }
}

export default users;