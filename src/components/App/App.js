import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Container from '../Container';
import SignUp from '../SignUp';
import LogIn from '../LogIn';

const App = () => {
    return(
        <Router>
            <Switch>
                <Route path = '/game' exact component = {Container} />
                <Route path = '/signup' exact component = {SignUp} />
                <Route path = '/login' exact component = {LogIn} />
                <Redirect to = '/login' />
            </Switch>
        </Router>
    );
};

export default App;
