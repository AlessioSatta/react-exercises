import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

// export class Counter extends React.Component {
//     state = {
//         count: this.props.initialValue,
//     }
    
//     componentDidMount() {
//         setInterval(() => {
//             this.setState({
//                 count: this.state.count + this.props.incrementAmount,
//             })
//         }, this.props.incrementInterval)
//     }
    
//     render() {
//         return <CounterDisplay count={this.state.count} />
//     }
// }

export function Counter(props) {
    const [count, setCount] = useState(props.initialValue)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(c => c + props.incrementAmount)
        }, props.incrementInterval)
        return () => {
            clearInterval(interval)
        }
    })

    return (
        <CounterDisplay count={count} />
    )
}