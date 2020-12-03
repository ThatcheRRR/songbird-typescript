import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { onGameWon } from '../../redux/actions/gameActions';
import winningImage from '../../assets/winningImage.jpg';
const maxScore = 30;

const Results = ({ totalScore, isGameWon }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if(totalScore === maxScore) {
            dispatch(onGameWon());
        }
    }, []);
    const winningScreen = (
        <>
            <img src = {winningImage} alt = 'winning poster' />
            <h2>Игра окончена!</h2>
            <div>Поздравляем! Вы набрали максимальное количество баллов! Вы настоящий гуру игровой индустрии!</div>
        </>
    );
    const loosingScreen = (
        <>
            <h1>Игра окончена!</h1>
            <div>Вы набрали {totalScore} баллов из 30 возможных!</div>
        </>
    );

    return(
        <div className = 'result-info'>
            {isGameWon ? winningScreen : loosingScreen}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        totalScore: state.game.totalScore,
        isGameWon: state.game.isGameWon
    }
};

export default connect(mapStateToProps)(Results);
