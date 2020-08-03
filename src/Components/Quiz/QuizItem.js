import React from 'react';

function QuizItem({ gameName, onPickGame, gameId, onPickedCorrect, gameForQuestion }) {

    function pickingGame(id) {
        onPickGame(id);
        if(id === gameForQuestion) {
            onPickedCorrect();
        }
    }

    return(
        <li className = 'answer' onClick = {() => pickingGame(gameId)}>
            <span className = 'answer-indicator'></span>
            {gameName}
        </li>
    );
}

export default QuizItem;