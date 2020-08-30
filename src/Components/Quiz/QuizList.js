import React from 'react';
import { connect } from 'react-redux';

import QuizItem from './QuizItem';

import data from '../Data/Data';

function QuizList({ currentTheme }) {
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
}

const mapStateToProps = state => {
    return {
        currentTheme: state.currentTheme
    }
};

export default connect(mapStateToProps)(QuizList);