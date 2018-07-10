import React, { Component } from 'react';

import Target from '../../components/Game/Target/Target';
import Result from '../../components/Game/Result/Result';

class Game extends Component {
    render() {
        return (
            <div>
                Game.js
                <Target />
                <Result />
            </div>
        )
    }
}

export default Game;