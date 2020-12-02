import React from 'react';

const Indicator = ({
    isClicked,
    isCorrect,
    canChange,
    isDefault
}) => {
    let className = '';
    if(isClicked && isCorrect && canChange) {
        className = 'correct';
    } else if(isClicked && !isCorrect && canChange) {
        className = 'wrong';
    } else if(isDefault && !canChange) {
        className = '';
    }

    return(
        <span className = {className}></span>
    );
}

export default Indicator;
