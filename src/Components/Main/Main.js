import React from 'react';
import './Main.scss';

import Question from '../Question/Question';
import Quiz from '../Quiz/Quiz';
import Description from '../Description/Description';
import NextButton from '../NextButton/NextButton';

import data from '../Data/Data';

function Main({ onChangeTitle, currentTheme, gameForQuestion, onPickGame, gameId, onPickedCorrect, isCorrect }) {
    let currentGames = data[currentTheme];
    let pickedGame = currentGames[gameId];
    let itemForQuestion = currentGames[gameForQuestion];
    return(
        <main>
            <Question
                itemForQuestion = {itemForQuestion}
                isCorrect = {isCorrect}
            />
            <Quiz
                currentGames = {currentGames}
                currentTheme = {currentTheme}
                onPickGame = {onPickGame}
                gameForQuestion = {gameForQuestion}
                onPickedCorrect = {onPickedCorrect}
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