import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_SUCCESS,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS
} from '../types/authTypes';
import { auth } from '../../utils/firebase';

export const login = (email, pass) => {
    return dispatch => {
        auth.signInWithEmailAndPassword(email, pass).then(() => {
            dispatch({ type: LOGIN_SUCCESS });
        }).catch((err) => {
            dispatch({ type: LOGIN_ERROR, err });
        });
    }
}

export const logout = () => {
    return dispatch => {
        auth.signOut().then(() => {
            dispatch({ type: LOGOUT_SUCCESS })
        });
    }
}

export const signup = (email, pass) => {
    return dispatch => {
        auth.createUserWithEmailAndPassword(
            email,
            pass
        ).then()
        .then(() => {
            dispatch({ type: SIGNUP_SUCCESS });
        }).catch((err) => {
            dispatch({ type: SIGNUP_ERROR, err});
        });
    }
}