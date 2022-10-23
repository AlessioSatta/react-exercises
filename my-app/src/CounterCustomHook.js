import { useCounter } from './useCounter';

export function CounterCustomHook() {
    const { count, Increment, Decrement, Reset } = useCounter(0)
    
    return (
        <div>
            <h1>useCounter Custom Hook {count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}