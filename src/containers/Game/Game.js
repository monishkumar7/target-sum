import React, { Component } from 'react';

import Target from '../../components/Game/Target/Target';
import Result from '../../components/Game/Result/Result';
import Button from '../../components/UI/Button/Button';
import Number from '../../components/Game/Number/Number'

class Game extends Component {
    state = {
        targetScore: null,
        playing: false,
        numbers: []
    }

    startGameHandler = () => {
        const target = Math.ceil(Math.random()*36);
        let gameNumbers = [];
        for(let i=0;i<6;i++) {
            i !== 3 ? gameNumbers.push(Math.floor(Math.random()*10)) : gameNumbers.push(target - gameNumbers.reduce((a,b) => a + b, 0))
            // let number = null;
            // if(i!=3) {
            //     number = Math.ceil(Math.random()*10);
            // } else {
            //     number = target - gameNumbers.reduce((a,b) => a + b, 0)
            // }
            // gameNumbers.push(number);
        }
        for(let i=0;i<gameNumbers.length;i++) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = gameNumbers[i];
            gameNumbers[i] = gameNumbers[j];
            gameNumbers[j] = temp;
        }
        this.setState({targetScore: target, playing: true, numbers: gameNumbers});
    }

    endGameHandler = () => {
        this.setState({targetScore: null, playing: false, numbers: []})
    }

    render() {
        const numbers = this.state.numbers.map(((number, index) => {
            <Number value={number} />
        }));
        return (
            <div>
                <Button disabled={this.state.playing} clicked={this.startGameHandler}>Start Game</Button>
                <Button disabled={!this.state.playing} clicked={this.endGameHandler}>End Game</Button>
                <Target target={this.state.targetScore}/>
                {numbers}
                <Result />
            </div>
        )
    }
}

export default Game;