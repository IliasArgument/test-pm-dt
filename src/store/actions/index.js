import axios from "axios";
import {
    GET_USERS_DATA, SET_IS_LOADING, SET_IS_ERROR
} from '../constatns';


export const setIsLoadind = payload => ({
    type: SET_IS_LOADING,
    payload: payload,
});

export const setIsError = payload => ({
    type: SET_IS_ERROR,
    payload: payload,
});

export const getUsersData = () => async (dispatch) => {
    try {
        dispatch(setIsLoadind(true))
        const response = await axios.get('http://135.181.30.244:27007/api/summaries/');
        dispatch({ type: GET_USERS_DATA, payload: response.data });
    } catch (error) {
        console.log(error, 'no data')
        dispatch(setIsError(true))
    } finally {
        dispatch(setIsLoadind(false))
    }
};

export const getCurrentPage = page => async (dispatch) => {
    try {
        dispatch(setIsLoadind(true))
        const response = await axios.get(`http://135.181.30.244:27007/api/summaries/?page=${page}`);
        dispatch({ type: GET_USERS_DATA, payload: response?.data });
    } catch (error) {
        console.log(error, 'no data')
        dispatch(setIsError(true))
    } finally {
        dispatch(setIsLoadind(false))
    }
}

export const getFilteredUsersByPhotos = (boolean) => async (dispatch) => {
    try {
        dispatch(setIsLoadind(true));
        const response = await axios.get(`http://135.181.30.244:27007/api/summaries/?photo=${boolean}`);
        dispatch({ type: GET_USERS_DATA, payload: response?.data })
    } catch (error) {
        console.log(error, 'no data')
        dispatch(setIsError(true))
    } finally {
        dispatch(setIsLoadind(false))
    }
}
