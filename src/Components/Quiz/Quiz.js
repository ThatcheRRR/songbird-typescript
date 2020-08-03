import React from 'react';
import './Quiz.scss';

import QuizList from './QuizList';

function Quiz({ currentGames, onPickGame, gameForQuestion, onPickedCorrect }) {
    return(
        <section className = 'quiz'>
        <QuizList data = {currentGames} onPickGame = {onPickGame} gameForQuestion = {gameForQuestion} onPickedCorrect = {onPickedCorrect} />
    </section>
    )
}

export default Quiz;