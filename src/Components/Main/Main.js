import React from 'react';
import './Main.scss';

import Question from '../Question/Question';
import Quiz from '../Quiz/Quiz';
import Description from '../Description/Description';
import NextButton from '../NextButton/NextButton';
import Results from '../Results/Results';

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
                gameId,
                isGameWon,
                data
}) {
    return(
        <main className = {isGameDone ? 'results' : ''}>
            {isGameDone && 
                <Results
                    totalScore = {totalScore}
                    isGameWon = {isGameWon}
                />
            }
            {!isGameDone &&
            <React.Fragment>
            <Question
                gameForQuestion = {gameForQuestion}
                isLevelDone = {isLevelDone}
                currentTheme = {currentTheme}
                data = {data}
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
                data = {data}
            />
            </React.Fragment>}
            <NextButton 
                onChangeTitle = {onChangeTitle}
                isLevelDone = {isLevelDone}
                onGameDone = {onGameDone}
                onRestartGame = {onRestartGame}
                isGameDone = {isGameDone}
                currentTheme = {currentTheme}
                isGameWon = {isGameWon}
            />
        </main>
    )
}

export default Main;