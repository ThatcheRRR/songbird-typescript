import React from 'react';
import './App.scss';
import Header from './../Header/Header';
import Main from '../Main/Main';

const App = () => {
    return(
        <div className = 'container'>
            <Header />
            <Main />
        </div>
    )
}

export default App;