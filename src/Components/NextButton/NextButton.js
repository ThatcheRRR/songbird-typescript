import React from 'react';
import './NextButton.scss';

function NextButton({ onChangeTitle }) {
    return(
        <button onClick = {onChangeTitle}>Next Level</button>
    );
}

export default NextButton;