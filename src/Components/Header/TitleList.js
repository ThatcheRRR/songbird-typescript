import React from 'react';
import { connect } from 'react-redux';

import TitleItem from './TitleItem';

import levelName from '../Data/LevelName';

const TitleList = ({ currentTheme }) => {
    let levels = levelName.map((item, ind) => {
        let currentTitle = 'theme'
        if(ind === currentTheme) {
            currentTitle += ' active';
        }
        return (
            <TitleItem
                name = {item.name}
                key = {item.key}
                currentTitle = {currentTitle} 
            />
        )
    });

    return(
        <ul className = 'theme-list'>
            {levels}
        </ul>
    )
}

const mapStateToProps = state => ({ currentTheme: state.currentTheme });

export default connect(mapStateToProps)(TitleList);