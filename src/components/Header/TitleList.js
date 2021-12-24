import React from 'react';
import { useSelector } from 'react-redux';
import { levelName } from '../../data/levelName';

const TitleList = () => {
    const currentTheme = useSelector(state => state.game.currentTheme);
    const levels = levelName.map((item, ind) => {
        let currentTitle = 'theme'
        if (ind === currentTheme) {
            currentTitle += ' active';
        }
        return (
            <li
                key={item.key}
                className={currentTitle}
            >
                {item.name}
            </li>
        );
    });

    return (
        <ul className = 'theme-list'>
            {levels}
        </ul>
    );
};

export default TitleList;
