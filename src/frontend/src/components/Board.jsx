import React from 'react'

import { calculateWinner } from '../logic/operation'

import circle_ico from '../assets/circle.png'
import cross_ico from '../assets/cross.png'

import './Board.scss'

const Square = ({ val, onSquareClick }) => {
    let source = null;

    switch (val) {
        case 'x':
            source = cross_ico;
            break;
        case 'o':
            source = circle_ico;
            break;
        case null:
            break;
        default:
            throw new Error('Unexpected data value');
    }

    return (
        <div className='square' onClick={onSquareClick}>
            <img src={source}/>
        </div>
    )
}

const Board = ({ boardSize, xIsNext, squares, onPlay }) => {

    const handleClick = (pos) => {
        if (squares[pos] || calculateWinner(squares)) {
            return null;
        }
        
        let newSquares = [...squares]

        if (xIsNext) {
            newSquares[pos] = 'x';
        } else {
            newSquares[pos] = 'o';
        }

        onPlay(newSquares);
    }

    const Row = ({ position }) => {
        const rowSquares = Array(boardSize).fill(null).map((val, idx) => {
            return <Square val={squares[position * boardSize + idx]} onSquareClick={() => handleClick(position * boardSize + idx)} />;
        })

        return (
            <div className='board-row'>
                {rowSquares}
            </div>
        )
    }

    const rows = Array(boardSize).fill(null).map((val, idx) => <Row position={idx} />);

    return (
        <div className='board'>
            {rows}
        </div>
    )
}

export default Board;