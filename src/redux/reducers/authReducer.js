import {
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT_SUCCESS,
    SIGNUP_ERROR,
    SIGNUP_SUCCESS
} from '../types/authTypes';

const initState = {
    authError: null,
    isLogged: false,
    userEmail: ''
};

export const authReducer = (state = initState, action) => {
    switch(action.type) {
        case LOGIN_ERROR:
            return {
                ...state,
                authError: action.err.message,
            };
        case LOGIN_SUCCESS:
            console.log('login success');
            return {
                ...state,
                authError: null,
                isLogged: true,
                userEmail: action.userEmail
            };
        case LOGOUT_SUCCESS:
            console.log('logout success');
            return state;
        case SIGNUP_SUCCESS:
            console.log('signup success')
            return {
                ...state,
                authError: null
            };
        case SIGNUP_ERROR:
            console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            };
        default:
            return state;
    }
};
