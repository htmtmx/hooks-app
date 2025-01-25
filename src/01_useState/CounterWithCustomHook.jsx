import { useState } from "react";

export const CounterWithCustomHook = () => {
    const [counter, setCounter] = useState(0);
    return (
        <section className="container d-flex justify-content-center align-items-center vh-100 flex-column">
            <h1>CounterWithCustomHook: {counter}</h1>
            <button className="btn btn-secondary" onClick={()=> setCounter(counter+1)}>+1</button>
        </section>
    )
}
