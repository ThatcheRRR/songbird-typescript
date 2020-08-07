import React from 'react';
import './Question.scss';

import questionImage from './assets/question.png'

import Player from '../Player/Player';

import data from '../Data/Data';

function Question({ gameForQuestion, isLevelDone, currentTheme, data }) {
    let item = {};

    if(isLevelDone) {
        item = data[currentTheme][gameForQuestion];
    } else {
        item.name = '******';
        item.image = questionImage;
    }

    return(
        <section className = "question">
            <img src = {item.image} alt = 'game poster' />
            <div className = 'game-info'>
                <h3 className = 'game-name'>{item.name}</h3>
                <Player
                    audio = {data[currentTheme][gameForQuestion].audio}
                    isLevelDone = {isLevelDone}
                />
            </div>
        </section>
    );
}

export default Question;