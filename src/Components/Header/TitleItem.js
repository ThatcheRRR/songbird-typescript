import React from 'react';

function TitleItem({ name, currentTitle }) {
    return(
        <li className = {currentTitle}>
            {name}
        </li>
    );
}

export default TitleItem;