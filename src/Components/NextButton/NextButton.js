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

    let buttonText = isGameWon && isGameDone ? 'Повторить рекорд' : !isGameWon && isGameDone ? 'Попробовать ещё раз!' : 'Next Level';

    return(
        <button className = {className} onClick = {isGameDone ? onRestartGame : checkCorrect}>{buttonText}</button>
    );
}

export default NextButton;