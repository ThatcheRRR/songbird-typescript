import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Header from '../Header';
import Main from '../Main';

const Container = () => {
    const isLogged = useSelector(state => state.auth.isLogged);

    if (!isLogged) {
        return <Navigate to='/login' />
    }

    return (
        <div className='container'>
            <Header />
            <Main />
        </div>
    );
};

export default Container;
