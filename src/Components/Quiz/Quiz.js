import React from 'react';
import './Quiz.scss';

import QuizList from './QuizList';

function Quiz({ currentGames, onPickGame }) {
    return(
        <section className = 'quiz'>
        <QuizList data = {currentGames} onPickGame = {onPickGame} />
    </section>
    )
}

export default Quiz;