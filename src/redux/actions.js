import {
    CHANGE_TITLE,
    GAME_DONE,
    REFRESH,
    WRONG_ANSWER,
    PICKED_GAME,
    RESTART_GAME,
    GAME_WON
} from './types';
import maxScoreSound from '../assets/maxScoreSound.mp3';

export const onChangeTitle = () => {
    return {
        type: CHANGE_TITLE 
    };
};

export const onPickGame = gameId => {
    return {
        type: PICKED_GAME,
        gameId
    };
};

export const onChangeRefresh = () => {
    return {
        type: REFRESH
    };
};

export const onPickWrongAnswer = () => {
    return {
        type: WRONG_ANSWER
    };
};

export const onRestartGame = () => {
    return {
        type: RESTART_GAME
    };
};

export const onGameDone = () => {
    return {
        type: GAME_DONE
    };
};

export const onGameWon = () => {
    return dispatch => {
        dispatch({ type: GAME_WON });
        const congrats = new Audio(maxScoreSound); 
        setTimeout(() => {
            congrats.play();
        }, 500);
        dispatch(onGameDone);
    }
};
