import React from 'react';
import './NextButton.scss';

function NextButton({ onChangeTitle, isLevelDone }) {

    let className = '';

    function checkCorrect() {
        if(isLevelDone) {
            onChangeTitle();
        } else {
            return;
        }
    }

    if(isLevelDone) {
        className += 'next'
    }

    return(
        <button className = {className} onClick = {checkCorrect}>Next Level</button>
    );
}

export default NextButton;