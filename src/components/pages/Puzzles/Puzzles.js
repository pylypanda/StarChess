import React, { Component } from 'react';
import Board from '../../../containers/Board/Board';

import './Puzzles.css';

class Puzzles extends Component {
    render() {
        return(
            <div className="container">
                <p>Puzzles Content</p>
                <Board />
            </div>
        );
    }
}
export default Puzzles;
