import React, { createContext, useState } from 'react'

export const counterContext = createContext();

const CounterContextProvider = ({children}) => {
    const [count, setCount] = useState(5);

    function increment () {
        setCount(count + 1);
    }
    function decrement(){
        setCount(count - 1);
    }

  return (
    <counterContext.Provider value={{count, increment, decrement}}>
        {children}
    </counterContext.Provider>
  )
}

export default CounterContextProvider;