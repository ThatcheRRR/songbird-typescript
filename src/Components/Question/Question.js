import React from 'react';
import './Question.scss';

import Player from '../Player/Player';

function Question({ itemForQuestion }) {
    return(
        <section className = "question">
        <img src = {itemForQuestion.image} alt = 'game poster' />
        <div className = 'game-info'>
            <h3 className = 'game-name'>{itemForQuestion.name}</h3>
            <Player />
        </div>
    </section>
    );
}

export default Question;