import { useState } from "react";

export const useCounter = (initialValue = 10, step = 1) => {
    const [counter, setCounter] = useState(initialValue);

    const decrement = () => {
        if (counter === 0) return
        setCounter(counter - step);
    }

    const increment = () => setCounter(counter + step);

    const resetCounter = () => setCounter(initialValue);

    return {
        counter,
        decrement,
        increment,
        resetCounter,
    };
}