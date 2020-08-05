import React from 'react';
import './Main.scss';

import Question from '../Question/Question';
import Quiz from '../Quiz/Quiz';
import Description from '../Description/Description';
import NextButton from '../NextButton/NextButton';
import Results from '../Results/Results';

const maxScore = 30;

function Main({ onChangeTitle,
                onPickGame,
                isLevelDone,
                gameForQuestion,
                needRefresh,
                onChangeRefresh,
                onPickWrongAnswer,
                isGameDone,
                onRestartGame,
                totalScore,
                onGameDone,
                currentTheme,
                gameId
}) {
    return(
        <main className = {isGameDone ? 'results' : ''}>
            {isGameDone && 
                <Results
                    totalScore = {totalScore}
                    maxScore = {maxScore}
                />
            }
            {!isGameDone &&
            <React.Fragment>
            <Question
                gameForQuestion = {gameForQuestion}
                isLevelDone = {isLevelDone}
                currentTheme = {currentTheme}
            />
            <Quiz
                currentTheme = {currentTheme}
                onPickGame = {onPickGame}
                isLevelDone = {isLevelDone}
                gameForQuestion = {gameForQuestion}
                needRefresh = {needRefresh}
                onChangeRefresh = {onChangeRefresh}
                onPickWrongAnswer = {onPickWrongAnswer}
            />
            <Description
                gameId = {gameId}
                currentTheme = {currentTheme}
            />
            </React.Fragment>}
            <NextButton 
                onChangeTitle = {onChangeTitle}
                isLevelDone = {isLevelDone}
                onGameDone = {onGameDone}
                onRestartGame = {onRestartGame}
                isGameDone = {isGameDone}
                currentTheme = {currentTheme}
                isGameWon = {maxScore === totalScore}
            />
        </main>
    )
}

export default Main;