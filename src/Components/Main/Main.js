import React from 'react';
import './Main.scss';

import Question from '../Question/Question';
import Quiz from '../Quiz/Quiz';
import Description from '../Description/Description';
import NextButton from '../NextButton/NextButton';

function Main({ onChangeTitle, currentGames, onPickGame, itemForQuestion, isLevelDone, pickedGame, gameForQuestion, needRefresh, onChangeRefresh, onPickWrongAnswer }) {
    return(
        <main>
            <Question
                itemForQuestion = {itemForQuestion}
                isLevelDone = {isLevelDone}
            />
            <Quiz
                currentGames = {currentGames}
                onPickGame = {onPickGame}
                isLevelDone = {isLevelDone}
                gameForQuestion = {gameForQuestion}
                needRefresh = {needRefresh}
                onChangeRefresh = {onChangeRefresh}
                onPickWrongAnswer = {onPickWrongAnswer}
            />
            <Description
                pickedGame = {pickedGame}
            />
            <NextButton 
                onChangeTitle = {onChangeTitle}
                isLevelDone = {isLevelDone}
            />
        </main>
    )
}

export default Main;