import React, { useState } from 'react'

import Board from './Board'
import { calculateWinner } from '../logic/operation'

import './ZeroCross.scss'

const ZeroCross = () => {

    let [data, setData] = useState(Array(9).fill(null));
    let [currentMove, setCurrentMove] = useState(0);

    const xIsNext = currentMove % 2 === 0;
    const boardSize = 3;

    const handlePlay = (newData) => {
        setData(newData);
        setCurrentMove(currentMove + 1);
    }

    const reset = () => {
        setData(Array(9).fill(null));
        setCurrentMove(0);
    }

    let status;
    const winner = calculateWinner(data);

    if (winner) {
        status = `${winner.toUpperCase()} is a winner !`;
    } else {
        status = `Current player is ${xIsNext ? 'O' : 'X'}`;
    }

    return (
    <div className='container'>
        <h1 className='title'>ZeroCross</h1>
        <Board boardSize={boardSize} xIsNext={xIsNext} squares={data} onPlay={handlePlay}/>
        <button className="reset" onClick={reset}>Reset</button>
        <h2 className='status'>{status}</h2>
    </div>
    )
}

export default ZeroCross;