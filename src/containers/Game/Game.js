import React, { Component } from 'react';

import Target from '../../components/Game/Target/Target';
import Result from '../../components/Game/Result/Result';
import Button from '../../components/UI/Button/Button';
import Number from '../../components/Game/Number/Number'

class Game extends Component {
    state = {
        targetScore: null,
        playing: false,
        playerSum: 0,
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
        console.log(this.state);
        this.setState({targetScore: target, playing: true, numbers: gameNumbers, playerSum: 0});
        console.log(this.state);
    }

    endGameHandler = () => {
        this.reset();
    }

    reset = () => {
        console.log(this.state);
        this.setState({
            targetScore: null,
            playing: false,
            numbers: [],
            playerSum: 0
        });
        console.log(this.state);
    }

    numberClickhandler = (id) => {
       let score = this.state.playerSum;
       score+=this.state.numbers[id];
       if(score===this.state.targetScore) {
           alert("You win!");
           this.reset();
       } else if(score > this.state.targetScore) {
           alert("You have lost the game. Please try again!");
           this.reset();
       }
       this.setState({playerSum: score});
    }

    render() {
        const numbers = this.state.numbers.map(((number, index) => {
           return <Number value={number} key={index} clicked={() => this.numberClickhandler(index)}/>
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