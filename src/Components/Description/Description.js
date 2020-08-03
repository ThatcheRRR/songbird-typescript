import React from 'react';
import './Description.scss';

import Initial from './Initial';
import Player from '../Player/Player';

function Description({ pickedGame }) {
    return(
    <section className = "description">
        {!pickedGame && <Initial />}
        {pickedGame && 
        <React.Fragment>
        <img src = {pickedGame.image} alt = 'game poster' />
        <div className = 'game-info'>
            <h3 className = 'game-name'>{pickedGame.name}</h3>
            <Player />
            <div className = 'game-description'>
                {pickedGame.description}
            </div>
        </div>
        </React.Fragment>}
    </section>
    );
}

export default Description;