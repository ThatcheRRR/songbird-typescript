import React from 'react';

import TitleItem from './TitleItem';

import levelName from '../Data/LevelName';

function TitleList({ currentTheme }) {
    let levels = levelName.map((item, ind) => {
        let currentTitle = 'theme'
        if(ind === currentTheme) {
            currentTitle += ' active';
        }
        return (
            <TitleItem name = {item.name} key = {item.key} currentTitle = {currentTitle} />
        )
    });

    return(
        <ul className = 'theme-list'>
            {levels}
        </ul>
    )
}

export default TitleList;