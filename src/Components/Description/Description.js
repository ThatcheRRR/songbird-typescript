import React from 'react';
import './Description.scss';

import Initial from './Initial';
import Player from '../Player/Player';

import data from '../Data/Data';

function Description({ gameId, currentTheme }) {
    let pickedGame = data[currentTheme][gameId];

    return(
    <section className = "description">
        {!pickedGame && <Initial />}
        {pickedGame && 
        <React.Fragment>
        <img src = {pickedGame.image} alt = 'game poster' />
        <div className = 'game-info'>
            <h3 className = 'game-name'>{pickedGame.name}</h3>
            <Player
                audio = {pickedGame.audio}
            />
            <div className = 'game-description'>
                {pickedGame.description}
            </div>
        </div>
        </React.Fragment>}
    </section>
    );
}

export default Description;