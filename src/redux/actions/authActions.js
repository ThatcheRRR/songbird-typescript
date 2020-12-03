import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    SIGNUP_SUCCESS,
    RESET_SIGN,
    ERROR
} from '../types/authTypes';
import { auth } from '../../utils/firebase';

export const login = (email, pass) => {
    return async dispatch => {
        try {
            const data = await auth.signInWithEmailAndPassword(email, pass);
            dispatch({ type: LOGIN_SUCCESS, userEmail: data.user.email });
        } catch(err) {
            dispatch({ type: ERROR, err });
        }
    }
};

export const logout = () => {
    return async dispatch => {
        try {
            auth.signOut();
            dispatch({ type: LOGOUT_SUCCESS });
        } catch(err) {
            dispatch({ type: ERROR, err });
        }
    }
};

export const signup = (email, pass, confirm) => {
    return async dispatch => {
        try {
            if(pass !== confirm) {
                throw new Error(`Passwords don't match`);
            }
            await auth.createUserWithEmailAndPassword(email, pass);
            dispatch({ type: SIGNUP_SUCCESS });
        } catch(err) {
            dispatch({ type: ERROR, err });
        }
    }
};

export const resetSign = () => ({
    type: RESET_SIGN
});
