import React  from 'react';
import { useSelector } from 'react-redux';
import TitleList from './TitleList';
import Alert from '../Alert';

const Header = () => {
    const totalScore = useSelector(state => state.totalScore);

    return(
        <header>
            <div className = 'header-top'>
                <h1>
                    Games<span>osts</span>
                </h1>
                <div className = 'user-menu'>
                    {/*<div className = 'current-user'>*/}
                    {/*    {currentUser}*/}
                    {/*</div>*/}
                    <button onClick = {() => {}}>
                        Log Out
                    </button>
                </div>
                <p>
                    Score: {totalScore}
                </p>
            </div>
            <TitleList className = 'theme-list' />
        </header>
    )
}

export default Header;
