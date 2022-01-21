import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Container from '../Container';
import SignUp from '../SignUp';
import LogIn from '../LogIn';

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' index element={<Container />} />
                <Route path='/signup' index element={<SignUp />} />
                <Route path='/login' index element={<LogIn />} />
                <Route path='*' to='/login' />
            </Routes>
        </HashRouter>
    );
};

export default App;
