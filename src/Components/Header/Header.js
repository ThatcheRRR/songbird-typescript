import React from 'react';
import './Header.scss';

import levelName from '../Data/LevelName';

function Header() {
    let levels = levelName.map(item => {
        return (
            <li key = {item.key} className = 'theme'>
                {item.name}
            </li>
        )
    });

    return(
        <header>
            <div className = 'header-top'>
                <h1>Games<span>osts</span></h1><p>Score: 0</p>
            </div>
            <ul className = 'theme-list'>
                {levels}
            </ul>
        </header>
    )
}

export default Header;