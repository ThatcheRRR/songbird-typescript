import React from 'react';
import './Header.scss';

import TitleList from './TitleList';

function Header({ totalScore, currentTheme }) {
    return(
        <header>
            <div className = 'header-top'>
                <h1>Games<span>osts</span></h1><p>Score: {totalScore}</p>
            </div>
            <TitleList currentTheme = {currentTheme} className = 'theme-list' />
        </header>
    )
}

export default Header;