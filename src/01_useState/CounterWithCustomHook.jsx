import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
    const { counter, resetCounter, increment, decrement } = useCounter(4,4);

    return (
        <section className="container d-flex justify-content-center align-items-center vh-100 flex-column">
            <h1>CounterWithCustomHook: {counter}</h1>
            <hr />
            <div className="d-flex gap-2">
                <button className="btn btn-secondary" onClick={decrement}>-1</button>
                <button className="btn btn-secondary" onClick={resetCounter}>Reset</button>
                <button className="btn btn-secondary" onClick={increment}>+1</button>
            </div>
        </section>
    )
}
