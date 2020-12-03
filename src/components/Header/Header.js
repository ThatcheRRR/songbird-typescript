import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import TitleList from './TitleList';
import Alert from '../Alert';

const Header = () => {
    const totalScore = useSelector(state => state.totalScore);
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        setError('');

        try {
            await logout();
            history.push('/login');
        } catch {
            setError('Failed to log out');
        }
    }
    return(
        <header>
            {
                error && <Alert error = {error} />
            }
            <div className = 'header-top'>
                <h1>
                    Games<span>osts</span>
                </h1>
                <div className = 'user-menu'>
                    {/*<div className = 'current-user'>*/}
                    {/*    {currentUser}*/}
                    {/*</div>*/}
                    <button onClick = {handleLogout}>
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
