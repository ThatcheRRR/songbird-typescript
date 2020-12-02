import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import Header from '../Header';
import Main from '../Main';

const App = () => {
    return(
        <Router>
            <AuthProvider>
                <div className = 'container'>
                    <Header />
                    <Main />
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;
