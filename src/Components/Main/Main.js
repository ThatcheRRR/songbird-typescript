import React from 'react';
import { connect } from 'react-redux';
import './Main.scss';

import Question from '../Question/Question';
import Quiz from '../Quiz/Quiz';
import Description from '../Description/Description';
import NextButton from '../NextButton/NextButton';
import Results from '../Results/Results';

const Main = ({ isGameDone }) => {
    return(
        <main className = {isGameDone ? 'results' : ''}>
            {isGameDone && 
                <Results />
            }
            {!isGameDone &&
            <>
            <Question />
            <Quiz />
            <Description />
            </>}
            <NextButton />
        </main>
    )
}

const mapStateToProps = state => {
    return {
        isGameDone: state.isGameDone
    }
}

export default connect(mapStateToProps)(Main);