import React from 'react';
import { connect } from 'react-redux';
import {
    onChangeTitle,
    onRestartGame,
    onGameDone
} from '../../redux/actions/gameActions';

const maxLevel = 5;
const actions = {
    onChangeTitle,
    onRestartGame,
    onGameDone
};

const NextButton = ({
    onChangeTitle,
    isLevelDone,
    isGameDone,
    onRestartGame,
    currentTheme,
    onGameDone,
    isGameWon
}) => {
    let className = '';
    const checkCorrect = () => {
        if (isLevelDone) {
            onChangeTitle();
        } else {
            return;
        }
        if (currentTheme === maxLevel) {
            onGameDone();
        }
    };

    if (isLevelDone || isGameDone) {
        className = 'next'
    }

    const buttonText = isGameWon && isGameDone ? 'Повторить рекорд' : !isGameWon && isGameDone ? 'Попробовать ещё раз!' : 'Next Level';

    return (
        <button
            className={className}
            onClick={isGameDone ? onRestartGame : checkCorrect}
        >
            {buttonText}
        </button>
    );
};

const mapStateToProps = state => ({
    isLevelDone: state.game.isLevelDone,
    isGameDone: state.game.isGameDone,
    isGameWon: state.game.isGameWon,
    currentTheme: state.game.currentTheme,
});

export default connect(mapStateToProps, actions)(NextButton);
