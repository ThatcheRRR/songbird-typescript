import React from 'react';
import { useSelector } from 'react-redux';
import Question from '../Question';
import Quiz from '../Quiz';
import Description from '../Description';
import NextButton from '../NextButton';
import Results from '../Results';

const Main = () => {
    const isGameDone = useSelector(state => state.isGameDone);
    return(
        <main className = {isGameDone ? 'results' : ''}>
            {
                isGameDone
                &&
                <Results />
            }
            {
                !isGameDone
                &&
                (<>
                    <Question />
                    <Quiz />
                    <Description />
                </>)
            }
            <NextButton />
        </main>
    )
}

export default Main;
