import React from 'react';

import QuizItem from './QuizItem';

function QuizList({ currentGames, onPickGame, isLevelDone, gameForQuestion, needRefresh, onChangeRefresh, onPickWrongAnswer }) {
    let games = currentGames.map((item) => {
        return(
            <QuizItem
            key = {item.id}
            gameName = {item.name}
            itemId = {item.id}
            onPickGame = {onPickGame}
            isLevelDone = {isLevelDone}
            gameForQuestion = {gameForQuestion}
            needRefresh = {needRefresh}
            onChangeRefresh = {onChangeRefresh}
            onPickWrongAnswer = {onPickWrongAnswer}
            />
        )
    });

    return(
        <ul className = 'quiz-list'>
            {games}
        </ul>
    );
}

export default QuizList;