import {
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    SIGNUP_SUCCESS,
    RESET_SIGN,
    ERROR
} from '../types/authTypes';

const initState = {
    authError: null,
    isLogged: false,
    isSigned: false,
    userEmail: ''
};

export const authReducer = (state = initState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                authError: null,
                isLogged: true,
                userEmail: action.userEmail
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isLogged: false,
                userEmail: ''
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                authError: null,
                isSigned: true
            };
        case ERROR:
            return {
                ...state,
                authError: action.err.message
            };
        case RESET_SIGN:
            return {
                ...state,
                isSigned: false
            }
        default:
            return state;
    }
};
