import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Player from '../Player';
import questionImage from '../../assets/question.png'
import data from '../../data/data';

const Question = ({
    gameForQuestion,
    isLevelDone,
    currentTheme
}) => {
    let item = {};
    const rightAnswer = data[currentTheme][gameForQuestion];
    useEffect(() => {
        console.log(`Ответ: ${rightAnswer.name}`);
    }, [currentTheme]);
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
                    audio = {rightAnswer.audio}
                    isLevelDone = {isLevelDone}
                />
            </div>
        </section>
    );
}

const mapStateToProps = state => {
    return {
        gameForQuestion: state.gameForQuestion,
        isLevelDone: state.isLevelDone,
        currentTheme: state.currentTheme
    }
}

export default connect(mapStateToProps)(Question);
