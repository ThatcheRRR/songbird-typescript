import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthContext';
import Container from '../Container';

const App = () => {
    return(
        <Router>
            <AuthProvider>
                <Route path = '/' exact component = {Container} />
            </AuthProvider>
        </Router>
    );
}

export default App;
