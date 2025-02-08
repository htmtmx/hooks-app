import { useCounter, useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
    
    const {counter, increment, decrement } = useCounter(1,1);
    const { data, hasError, isLoading, error} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    return (
        <>
            <div className="container vh-100 d-flex flex-column align-items-center justify-content-center">

            <h1>MultipleCustomHooks</h1>
                {isLoading && <p>Loading...</p>}
                {counter < 1 || hasError ? (!isLoading && <p>Not found</p>) : 
                    <pre>{data?.name}</pre>
                }
            <div className="container d-flex justify-content-between">
                <button className="btn btn-secondary" onClick={decrement}>Anterior</button>
                <button className="btn btn-primary" onClick={increment}>Siguiente</button>
            </div>
            </div>
        </>
    )
}
