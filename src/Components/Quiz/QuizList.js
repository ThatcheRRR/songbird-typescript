import React from 'react';

import QuizItem from './QuizItem';

function QuizList({ data, onPickGame }) {
    let games = data.map((item) => {
        return(
            <QuizItem key = {item.id} gameName = {item.name} gameId = {item.id} onPickGame = {onPickGame} />
        )
    });

    return(
        <ul className = 'quiz-list'>
            {games}
        </ul>
    );
}

export default QuizList;