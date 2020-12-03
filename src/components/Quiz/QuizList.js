import React from 'react';
import { useSelector } from 'react-redux';
import QuizItem from './QuizItem';
import data from '../../data/data';

const QuizList = () => {
    const currentTheme = useSelector(state => state.game.currentTheme);
    let games = data[currentTheme].map((item) => {
        return(
            <QuizItem
                key = {item.id}
                gameName = {item.name}
                itemId = {item.id}
            />
        )
    });

    return(
        <ul className = 'quiz-list'>
            {games}
        </ul>
    );
};

export default QuizList;
