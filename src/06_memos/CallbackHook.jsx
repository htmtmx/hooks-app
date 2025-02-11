import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    const increment = useCallback(
        (step) => {
            console.log("Incremented");
            setCounter((prevState) => prevState + step);
        },
        [],
    )

    return (
        <>
            <h1>useCallback hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment} />
        </>
    )
}
