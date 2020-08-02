import React from 'react';
import './App.scss';
import Header from './../Header/Header';
import Main from '../Main/Main';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className = 'container'>
                <Header />
                <Main />
            </div>
        )
    }
}