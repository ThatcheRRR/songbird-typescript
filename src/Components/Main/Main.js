import React from 'react';
import './Main.scss';

import Question from '../Question/Question';
import Quiz from '../Quiz/Quiz';
import Description from '../Description/Description';
import NextButton from '../NextButton/NextButton';

function Main() {
    return(
        <main>
            <Question />
            <Quiz />
            <Description />
            <NextButton />
        </main>
    )
}

export default Main;