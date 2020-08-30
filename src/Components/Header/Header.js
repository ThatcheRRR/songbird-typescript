import React from 'react';
import { connect } from 'react-redux';
import './Header.scss';

import TitleList from './TitleList';

const Header = ({ totalScore }) => {
    return(
        <header>
            <div className = 'header-top'>
                <h1>Games<span>osts</span></h1><p>Score: {totalScore}</p>
            </div>
            <TitleList className = 'theme-list' />
        </header>
    )
}

const mapStateToProps = state => ({ totalScore: state.totalScore });

export default connect(mapStateToProps)(Header);