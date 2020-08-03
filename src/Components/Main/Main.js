import React from 'react';
import './Main.scss';

import Question from '../Question/Question';
import Quiz from '../Quiz/Quiz';
import Description from '../Description/Description';
import NextButton from '../NextButton/NextButton';

import data from '../Data/Data';

function Main({ onChangeTitle, currentTheme, gameForQuestion, onPickGame, gameId }) {
    let currentGames = data[currentTheme];
    let pickedGame = currentGames[gameId];

    return(
        <main>
            <Question
                currentGames = {currentGames}
                gameForQuestion = {gameForQuestion}
            />
            <Quiz
                currentGames = {currentGames}
                currentTheme = {currentTheme}
                onPickGame = {onPickGame}
            />
            <Description
                pickedGame = {pickedGame}
            />
            <NextButton 
                onChangeTitle = {onChangeTitle}
            />
        </main>
    )
}

export default Main;