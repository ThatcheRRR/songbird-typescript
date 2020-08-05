import React from 'react';
import './NextButton.scss';

const maxLevel = 5;

function NextButton({ onChangeTitle, isLevelDone, isGameDone, onRestartGame, currentTheme, onGameDone, isGameWon }) {

    let className = '';

    function checkCorrect() {
        if(isLevelDone) {
            onChangeTitle();
        } else {
            return;
        }

        if(currentTheme === maxLevel) {
            onGameDone();
        }
    }

    if(isLevelDone || isGameDone) {
        className = 'next'
    }

    if(isGameWon) {
        className += ' gameWon';
    }

    return(
        <button className = {className} onClick = {isGameDone ? onRestartGame : checkCorrect}>{isGameDone ? 'Попробовать ещё раз!' : 'Next Level'}</button>
    );
}

export default NextButton;