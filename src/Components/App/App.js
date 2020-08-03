import React from 'react';
import './App.scss';

import Header from './../Header/Header';
import Main from '../Main/Main';

const maxScoreForAnswer = 5;
const maxLevel = 5;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalScore: 0,
            currentTheme: 0,
            gameId: null,
            isCorrect: false,
            gameForQuestion: Math.floor(Math.random() * 6),
        }

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onPickGame = this.onPickGame.bind(this);
        this.onPickedCorrect = this.onPickedCorrect.bind(this);
    }

    onChangeTitle() {
        this.setState({ 
            currentTheme: this.state.currentTheme + 1,
            gameId: null
        });
    }

    onPickGame(id) {
        this.setState({ gameId: id });
    }

    onPickedCorrect() {
        this.setState({ isCorrect: true });
    }

    render() {
        return(
            <div className = 'container'>
                <Header
                    currentTheme = {this.state.currentTheme}
                    totalScore = {this.state.totalScore}
                />
                <Main
                    onChangeTitle = {this.onChangeTitle}
                    currentTheme = {this.state.currentTheme}
                    gameForQuestion = {this.state.gameForQuestion}
                    onPickGame = {this.onPickGame}
                    gameId = {this.state.gameId}
                    maxLevel = {maxLevel}
                    maxScoreForAnswer = {maxScoreForAnswer}
                    isCorrect = {this.state.isCorrect}
                    onPickedCorrect = {this.onPickedCorrect}
                />
            </div>
        )
    }
}