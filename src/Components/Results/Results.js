import React from 'react';
import './Results.scss';

import winningImage from './assets/winningImage.jpg';

import maxScore from './assets/maxScore.mp3';

function Results({ totalScore, isGameWon }) {
    let congrats = new Audio(maxScore);

    if(isGameWon) {
        setTimeout(() => congrats.play(), 600)
    }

    let winningScreen = 
    <React.Fragment>
        <img src = {winningImage} alt = 'winning poster' />
        <h2>Игра окончена!</h2>
        <div>Поздравляем! Вы набрали максимальное количество баллов! Вы настоящий гуру игровой индустрии!</div>
    </React.Fragment>;

    let loosingScreen = 
    <React.Fragment>
        <h1>Игра окончена!</h1>
        <div>Вы набрали {totalScore} баллов из {maxScore} возможных!</div>
    </React.Fragment>

    return(
        <div className = 'result-info'>
            {isGameWon ? winningScreen : loosingScreen}
        </div>
    );
}

export default Results;