import React from 'react';
import { connect } from 'react-redux';
import './Description.scss';
import Initial from './Initial';
import Player from '../Player/Player';
import data from '../../data/data';

function Description({ gameId, currentTheme }) {
    let pickedGame = data[currentTheme][gameId];
    return(
    <section className = "description">
        {!pickedGame && <Initial />}
        {pickedGame && 
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
        </>}
    </section>
    );
}

const mapStateToProps = state => {
    return {
        gameId: state.gameId,
        currentTheme: state.currentTheme
    }
}

export default connect(mapStateToProps)(Description);
