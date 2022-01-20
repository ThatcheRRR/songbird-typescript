import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Container from '../Container';
import SignUp from '../SignUp';
import LogIn from '../LogIn';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' exact component={Container} />
                <Route path='/signup' exact component={SignUp} />
                <Route path='/login' exact component={LogIn} />
                <Route index to='/login' />
            </Routes>
        </Router>
    );
};

export default App;
