import React from 'react';

function QuizItem({ gameName, onPickGame, gameId }) {

    function pickingGame(id) {
        onPickGame(id);
    }

    return(
        <li className = 'answer' onClick = {() => pickingGame(gameId)}>
            <span className = 'answer-indicator'></span>
            {gameName}
        </li>
    );
}

export default QuizItem;