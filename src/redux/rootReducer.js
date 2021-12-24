import { combineReducers } from 'redux';
import { authReducer, gameReducer } from './reducers';

export const rootReducer = combineReducers({
    auth: authReducer,
    game: gameReducer,
});
