import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onGameWon } from '../../redux/actions/gameActions';
import winningImage from '../../assets/winningImage.jpg';
const maxScore = 30;

const Results = () => {
    const dispatch = useDispatch();
    const totalScore = useSelector(state => state.game.totalScore);
    const isGameWon = useSelector(state => state.game.isGameWon);

    useEffect(() => {
        if (totalScore === maxScore) {
            dispatch(onGameWon());
        }
    }, []);

    const winningScreen = (
        <>
            <img src={winningImage} alt='winning poster' />
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

    return (
        <div className='result-info'>
            {isGameWon ? winningScreen : loosingScreen}
        </div>
    );
};

export default Results;
