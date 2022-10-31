import { useState, useCallback } from "react";

export function useCounter() {
    const [count, setCount] = useState(0)

    const handleIncrement = useCallback(
        function handleIncrement() {
            setCount(c => c + 1)
        }, []
    )

    const handleDecrement = useCallback(
        function handleDecrement() {
            setCount(c => c - 1)
        }, []
    )

    const handleReset = useCallback(
        function handleReset() {
            setCount(0)
        }, []
    )


    return {
        count: count,
        Increment: handleIncrement,
        Decrement: handleDecrement,
        Reset: handleReset
    }
}