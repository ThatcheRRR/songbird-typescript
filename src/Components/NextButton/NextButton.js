import React from 'react';
import './NextButton.scss';

function NextButton({ onChangeTitle, isCorrect }) {

    let className = '';

    function checkCorrect() {
        if(isCorrect) {
            onChangeTitle();
        } else {
            return;
        }
    }

    if(isCorrect) {
        className += 'next'
    }

    return(
        <button className = {className} onClick = {checkCorrect}>Next Level</button>
    );
}

export default NextButton;