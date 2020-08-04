import React from 'react';
import './Quiz.scss';

import QuizList from './QuizList';

function Quiz({ currentGames, onPickGame, isLevelDone, isCorrect, gameForQuestion, needRefresh, onChangeRefresh, canChange }) {
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
            canChange = {canChange}
            />
        </section>
    )
}

export default Quiz;