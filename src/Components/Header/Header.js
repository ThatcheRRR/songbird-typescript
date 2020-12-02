import React from 'react';
import { useSelector } from 'react-redux';
import './Header.scss';
import TitleList from './TitleList';

const Header = () => {
    const totalScore = useSelector(state => state.totalScore);
    return(
        <header>
            <div className = 'header-top'>
                <h1>Games<span>osts</span></h1><p>Score: {totalScore}</p>
            </div>
            <TitleList className = 'theme-list' />
        </header>
    )
}

export default Header;
