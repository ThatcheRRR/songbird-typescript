import React from 'react';
import './App.scss';

import Header from './../Header/Header';
import Main from '../Main/Main';

import data from '../Data/Data';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalScore: 0,
            currentTheme: 0,
            gameId: null,
            isLevelDone: false,
            isGameDone: false,
            isCorrect: false,
            needRefresh: false,
            wrongAnswers: 0,
            gameForQuestion: Math.floor(Math.random() * 6),
        }

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onPickGame = this.onPickGame.bind(this);
        this.onChangeRefresh = this.onChangeRefresh.bind(this);
        this.onPickWrongAnswer = this.onPickWrongAnswer.bind(this);
    }

    onChangeTitle() {
        this.setState({ 
            currentTheme: this.state.currentTheme + 1,
            gameId: null,
            isLevelDone: false,
            gameForQuestion: Math.floor(Math.random() * 6),
            isCorrect: false,
            needRefresh: true,
            wrongAnswers: 0
        });
    }

    onChangeRefresh() {
        this.setState({ needRefresh: false })
    }

    onPickGame(id) {
        this.setState({ gameId: id });
        if(id === this.state.gameForQuestion) {
            this.setState((state) => {
                return {
                    totalScore: state.totalScore + 5 - this.state.wrongAnswers,
                    isCorrect: true,
                    isLevelDone: true,
                }
            });
        }
    }

    onPickWrongAnswer() {
        this.setState((state) => {
            return {
                wrongAnswers: state.wrongAnswers + 1
            }
        })
    }

    render() {
        let currentGames = data[this.state.currentTheme];
        let pickedGame = currentGames[this.state.gameId];
        let itemForQuestion = currentGames[this.state.gameForQuestion];
        return(
            <div className = 'container'>
                <Header
                    currentTheme = {this.state.currentTheme}
                    totalScore = {this.state.totalScore}
                />
                <Main
                    onChangeTitle = {this.onChangeTitle}
                    gameForQuestion = {this.state.gameForQuestion}
                    onPickGame = {this.onPickGame}
                    isLevelDone = {this.state.isLevelDone}
                    pickedGame = {pickedGame}
                    itemForQuestion = {itemForQuestion}
                    currentGames = {currentGames}
                    needRefresh = {this.state.needRefresh}
                    isCorrect = {this.state.isCorrect}
                    onChangeRefresh = {this.onChangeRefresh}
                    onPickWrongAnswer = {this.onPickWrongAnswer}
                />
            </div>
        )
    }
}