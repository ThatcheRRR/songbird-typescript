import React  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TitleList from './TitleList';
import Alert from '../Alert';
import { logout } from '../../redux/actions/authActions';

const Header = () => {
    const totalScore = useSelector(state => state.game.totalScore);
    const authError = useSelector(state => state.auth.authError);
    const dispatch = useDispatch();

    const handleLogout = e => {
        e.preventDefault();
        dispatch(logout);
    };

    return(
        <header>
            {
                authError && <Alert error = {authError} />
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
