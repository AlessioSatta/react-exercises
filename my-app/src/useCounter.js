import { useState } from "react";

export function useCounter() {
    const [count, setCount] = useState(0)

    function handleIncrement() {
        setCount(c => c + 1)
    }

    function handleDecrement() {
        setCount(c => c - 1)
    }

    function handleReset() {
        setCount(0)
    }

    return {
        count: count,
        Increment: handleIncrement,
        Decrement: handleDecrement,
        Reset: handleReset
    }
}