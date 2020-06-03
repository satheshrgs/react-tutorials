import React, { useState } from 'react';
import CounterDisplay from './App2';


function App1() {

    const [ counter, setCounter ] = useState(0);

    // const [ state, setState ] = useState({
    //     counter: 0
    // })

    // setState({
    //     ...state,
    //     counter: 1
    // })

    const handleButtonClick = (value='add') => {
        const updatedValue = value === 'subtract' ? counter - 1 : counter + 1;
        setCounter(updatedValue);
    }

    return (
        <div>
            <button onClick={ () => handleButtonClick('subtract')} >-</button>
            <div>{counter}</div>
            <CounterDisplay />
            <button onClick={ () => handleButtonClick() } >+</button>
        </div>
    )
}
export default App1;