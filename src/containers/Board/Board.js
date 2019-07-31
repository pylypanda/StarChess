import React, { Component } from 'react';

import WhiteKing from '../../img/white-king.png';
import BlackKing from '../../img/black-king.png';

import './Board.css';

class Board extends Component {
    render () {
        return (
            <div>
                <div class="divTable">
                    <div class="divTableBody">
                        <div class="divTableRow">
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"><img src={BlackKing} /></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                        </div>
                        <div class="divTableRow">
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                        </div>
                        <div class="divTableRow">
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                        </div>
                        <div class="divTableRow">
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                        </div>
                        <div class="divTableRow">
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                        </div>
                        <div class="divTableRow">
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                        </div>
                        <div class="divTableRow">
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                        </div>
                        <div class="divTableRow">
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"><img src={WhiteKing} /></div>
                            <div class="divTableCell white-sq"></div>
                            <div class="divTableCell black-sq"></div>
                            <div class="divTableCell white-sq"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;
