import React, { useState } from 'react'
import './ZeroCross.scss'
import circle_ico from '../../assets/circle.png'
import cross_ico from '../../assets/cross.png'

let data = [0, 0, 0, 0, 0, 0, 0, 0, 0]

const ZeroCross = () => {

  let [lock, setLock] = useState(false)
  let [count, setCount] = useState(0)

  const toggle = (e, pos) => {
    
    if (lock) {
      return 0;
    }

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${circle_ico}'>`;
      data[pos] = 1;
    }
    else {
      e.target.innerHTML = `<img src='${cross_ico}'>`;
      data[pos] = 2;
    }

    setCount(++count);
  }

  const reset = (e) => {
    data = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    setLock(false);
  }

  const checkWin = () => {

  }

  return (
    <div className='container'>
      <h1 className='title'>ZeroCross</h1>
      <div className='board'>
        <div className='row1'>
          <div className='box' onClick={(e)=>{toggle(e, 0)}}></div>
          <div className='box' onClick={(e)=>{toggle(e, 1)}}></div>
          <div className='box' onClick={(e)=>{toggle(e, 2)}}></div>
        </div>
        <div className='row2'>
          <div className='box' onClick={(e)=>{toggle(e, 3)}}></div>
          <div className='box' onClick={(e)=>{toggle(e, 4)}}></div>
          <div className='box' onClick={(e)=>{toggle(e, 5)}}></div>
        </div>
        <div className='row3'>
          <div className='box' onClick={(e)=>{toggle(e, 6)}}></div>
          <div className='box' onClick={(e)=>{toggle(e, 7)}}></div>
          <div className='box' onClick={(e)=>{toggle(e, 8)}}></div>
        </div>
      </div>
      <button className="reset" onClick={(e)=>{reset(e)}}>Reset</button>
    </div>
  )
}

export default ZeroCross