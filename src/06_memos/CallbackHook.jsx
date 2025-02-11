import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    const increment = useCallback(
        () => {
            console.log("Incremented");
            setCounter((prevState)=> prevState + 1);
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
