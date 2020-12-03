import React from 'react';
import { connect } from 'react-redux';
import Player from '../Player/Player';
import data from '../../data/data';

const Description = ({ gameId, currentTheme }) => {
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
}

const mapStateToProps = state => {
    return {
        gameId: state.game.gameId,
        currentTheme: state.game.currentTheme
    }
}

export default connect(mapStateToProps)(Description);
