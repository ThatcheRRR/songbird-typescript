import {
    WRONG_ANSWER,
    CHANGE_TITLE,
    PICKED_GAME,
    REFRESH,
    RESTART_GAME,
    GAME_DONE,
    GAME_WON
} from '../types/gameTypes';
import wrongSound from '../../assets/wrong.mp3';
import rightSound from '../../assets/right.mp3';

const onWrong = new Audio(wrongSound);
const onRight = new Audio(rightSound);

const playWrongSound = () => {
    onWrong.load();
    onWrong.play();
};

const initialState = {
    currentTheme: 0,
    gameId: null,
    isLevelDone: false,
    gameForQuestion: Math.floor(Math.random() * 6),
    needRefresh: false,
    isGameDone: false,
    wrongAnswers: 0,
    totalScore: 0,
    isGameWon: false,
    maxScore: 30
};

export const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case WRONG_ANSWER:
            state = {...state, wrongAnswers: state.wrongAnswers + 1}
            return state;
        case CHANGE_TITLE:
            state = {
                ...state,
                currentTheme: state.currentTheme + 1,
                gameId: null,
                isLevelDone: false,
                gameForQuestion: Math.floor(Math.random() * 6),
                needRefresh: true,
                wrongAnswers: 0,
            }
            return state;
        case PICKED_GAME:
            state = {...state, gameId: action.gameId};
            if(state.gameForQuestion === action.gameId) {
                if(!state.isLevelDone) {
                    onRight.play();
                }

                let newScore;

                if(state.isLevelDone) {
                    newScore = state.totalScore;
                } else {
                    newScore = state.totalScore + 5 - state.wrongAnswers;
                }

                state = {
                    ...state,
                    isLevelDone: true,
                    totalScore: newScore,
                }
            }

            if(!state.isLevelDone && action.gameId !== state.gameForQuestion) {
                playWrongSound();
            }
            return state;
        case REFRESH:
            state = {...state, needRefresh: false};
            return state;
        case RESTART_GAME:
            state = {
                ...state,
                ...initialState
            }
            return state;
        case GAME_DONE:
            state = {...state, isGameDone: true}
            return state;
        case GAME_WON:
            state = {...state, isGameWon: true}
            return state;
        default: return state;
    }
};
