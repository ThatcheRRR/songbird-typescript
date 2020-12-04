import React from 'react';
import { connect } from 'react-redux';
import { onPickGame, onChangeRefresh, onPickWrongAnswer } from '../../redux/actions/gameActions';
import Indicator from './Indicator';
const actions = {
    onPickGame,
    onChangeRefresh,
    onPickWrongAnswer
};

class QuizItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
            isCorrect: false,
            canChange: true,
            isDefault: false
        }
        this.pickingGame = this.pickingGame.bind(this);
    }

    pickingGame(id) {
        this.props.onPickGame(id);
        this.setState({ isClicked: true });
        if(this.props.gameForQuestion === id) {
            this.setState({ isCorrect: true });
        }
        if(this.props.isLevelDone && !this.state.isClicked) {
            this.setState({ isDefault: true, canChange: false })
        }
        if(!this.props.isLevelDone && !this.state.isClicked) {
            this.props.onPickWrongAnswer();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.isClicked && prevProps !== this.props && this.props.needRefresh) {
            this.setState({ isClicked: false, isCorrect: false, isDefault: false, canChange: true });
            this.props.onChangeRefresh();
        }
    }

    render() {
        return(
            <li className = 'answer' onClick = {() => this.pickingGame(this.props.itemId)}>
                <Indicator
                    isClicked = {this.state.isClicked}
                    isCorrect = {this.state.isCorrect}
                    canChange = {this.state.canChange}
                    isDefault = {this.state.isDefault}
                />
                {this.props.gameName}
            </li>
        );
    }
}

const mapStateToProps = state => {
    return {
        gameForQuestion: state.game.gameForQuestion,
        isLevelDone: state.game.isLevelDone,
        needRefresh: state.game.needRefresh
    }
};

export default connect(mapStateToProps, actions)(QuizItem);
