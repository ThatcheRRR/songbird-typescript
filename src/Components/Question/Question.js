import React from 'react';
import './Question.scss';

import questionImage from '../App/assets/question.png'

import Player from '../Player/Player';

function Question({ itemForQuestion, isLevelDone }) {
    let item = {};

    if(isLevelDone) {
        item = itemForQuestion;
    } else {
        item.name = '******';
        item.image = questionImage;
    }

    return(
        <section className = "question">
            <img src = {item.image} alt = 'game poster' />
            <div className = 'game-info'>
                <h3 className = 'game-name'>{item.name}</h3>
                <Player />
            </div>
        </section>
    );
}

export default Question;