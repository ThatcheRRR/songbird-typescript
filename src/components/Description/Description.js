import React from 'react';
import { useSelector } from 'react-redux';
import Player from '../Player/Player';
import { data } from '../../data/data';

const Description = () => {
    const currentTheme = useSelector(state => state.game.currentTheme);
    const gameId = useSelector(state => state.game.gameId);
    const pickedGame = data[currentTheme][gameId];

    return(
    <section className = "description">
        {
            !pickedGame
            &&
            (
                <div className = 'initial'>
                    <p>Послушайте плеер.</p>
                    <p>Выберите игру из списка.</p>
                </div>
            )
        }
        {
            pickedGame
            &&
            (
                <>
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
                </>
            )
        }
    </section>
    );
};

export default Description;
