import React from 'react';
import './Results.scss';
import winningImage from './assets/winningImage.jpg';

function Results({ totalScore, maxScore }) {

    let winningScreen = 
    <React.Fragment>
        <img src = {winningImage} alt = 'winning poster' />
        <h2>Игра окончена!</h2>
        <div>Вы набрали максимальное количество баллов!</div>
    </React.Fragment>;

    let loosingScreen = 
    <React.Fragment>
        <h1>Игра окончена!</h1>
        <div>Вы набрали {totalScore} баллов из {maxScore} возможных!</div>
    </React.Fragment>

    return(
        <div className = 'result-info'>
            {totalScore === maxScore ? winningScreen : loosingScreen}
        </div>
    );
}

export default Results;