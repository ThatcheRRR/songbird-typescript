import React from 'react';

import QuizItem from './QuizItem';

function QuizList({ currentGames, onPickGame, isLevelDone, isCorrect, gameForQuestion, needRefresh, onChangeRefresh, canChange }) {
    let games = currentGames.map((item) => {
        return(
            <QuizItem
            key = {item.id}
            gameName = {item.name}
            itemId = {item.id}
            onPickGame = {onPickGame}
            isLevelDone = {isLevelDone}
            isCorrect = {isCorrect}
            gameForQuestion = {gameForQuestion}
            needRefresh = {needRefresh}
            onChangeRefresh = {onChangeRefresh}
            canChange = {canChange}
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