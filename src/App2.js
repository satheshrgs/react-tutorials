import React from 'react';

const App2 = (props) => {
    console.log(props);
    const { counter, resetCounter } = props;
    return (
        <>
            { counter < 10 ? <div>Less Than 10</div> : <div>Greater than 10</div> }
            { <div className={ counter < 10 ? 'counter-text': 'gt10' }>{ counter }</div> }
            <button onClick={ () => resetCounter(0)}>Reset Counter</button>
        </>
    )
}

export default App2;


// const App2 = (props) => {
//     const { counter } = props;
//     return (
//         <div>{ counter }</div>
//     )
// }

// const App2 = (props) => {
//     return (
//         <div>{ props.counter }</div>
//     )
// }