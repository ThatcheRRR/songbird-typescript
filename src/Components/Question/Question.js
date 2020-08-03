import React from 'react';
import './Question.scss';

import Player from '../Player/Player';

function Question({ gameForQuestion, currentGames }) {
    return(
        <section className = "question">
        <img src = {currentGames[gameForQuestion].image} alt = 'game poster' />
        <div className = 'game-info'>
            <h3 className = 'game-name'>{currentGames[gameForQuestion].name}</h3>
            <Player />
        </div>
    </section>
    );
}

export default Question;