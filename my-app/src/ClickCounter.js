// import React from 'react'

// export class ClickCounter extends React.Component {
//     state = {
//         count: 0
//     }

//     handleCounterIncrement = () => {
//         this.setState((state) => {
//             return {
//                 count: state.count + 1
//             }
//         })
//     }

//     render() {
//         return(
//             <div>
//                 <h3>Count: {this.state.count}</h3>
//                 <button onClick={this.handleCounterIncrement}>Increment</button>
//             </div>
//         )
//     }
// }

import { useState } from 'react';

export function ClickCounter() {
    const [counter, setCounter] = useState(0)

    function handleCounterIncrement() {
        setCounter(c => c + 1)
    }

    return(
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={handleCounterIncrement}>Increment</button>
        </div>
    )
}