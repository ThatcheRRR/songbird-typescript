import React from 'react';
import './Quiz.scss';

import QuizList from './QuizList';

function Quiz({ currentGames, onPickGame, isLevelDone, isCorrect, gameForQuestion, needRefresh, onChangeRefresh, onPickWrongAnswer }) {
    return(
        <section className = 'quiz'>
            <QuizList
            currentGames = {currentGames}
            onPickGame = {onPickGame}
            isLevelDone = {isLevelDone}
            isCorrect = {isCorrect}
            gameForQuestion = {gameForQuestion}
            needRefresh = {needRefresh}
            onChangeRefresh = {onChangeRefresh}
            onPickWrongAnswer = {onPickWrongAnswer}
            />
        </section>
    )
}

export default Quiz;