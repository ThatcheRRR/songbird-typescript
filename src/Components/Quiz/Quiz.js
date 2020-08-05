import React from 'react';
import './Quiz.scss';

import QuizList from './QuizList';

function Quiz({ currentTheme, onPickGame, isLevelDone, gameForQuestion, needRefresh, onChangeRefresh, onPickWrongAnswer }) {
    return(
        <section className = 'quiz'>
            <QuizList
            currentTheme = {currentTheme}
            onPickGame = {onPickGame}
            isLevelDone = {isLevelDone}
            gameForQuestion = {gameForQuestion}
            needRefresh = {needRefresh}
            onChangeRefresh = {onChangeRefresh}
            onPickWrongAnswer = {onPickWrongAnswer}
            />
        </section>
    )
}

export default Quiz;