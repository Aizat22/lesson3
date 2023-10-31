import React, { useContext } from 'react'
import { contactContext } from '../contexts/ContactContextProvider'
import { counterContext } from '../contexts/CounterContextProvider'

const Counter2 = () => {
    const {count, increment, decrement} =useContext(counterContext)
  return (
    <div><h2>{count}</h2>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter2