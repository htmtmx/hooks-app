import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1, 1);
    const { data, hasError, isLoading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    return (
        <>
            <div className="container vh-100 d-flex flex-column align-items-center justify-content-center">

                <h1>MultipleCustomHooks</h1>
                {isLoading
                    ? <LoadingMessage />
                    : (
                        !hasError &&
                        <PokemonCard
                            pokeName={data?.name}
                            id={data?.id}
                            sprites={[
                                data?.sprites.front_default,
                                data?.sprites.back_default,
                                data?.sprites.front_shiny,
                                data?.sprites.back_shiny
                            ]}
                        />
                    )
                }
                {(counter < 1 || hasError) && (!isLoading && <div className="alert alert-danger" role="alert">
                    Not found
                </div> )}
                <div className="container d-flex justify-content-between">
                    <button className="btn btn-secondary" onClick={decrement} disabled={counter < 2}>
                        Anterior
                    </button>
                    <button className="btn btn-primary" onClick={increment}>Siguiente</button>
                </div>
            </div>
        </>
    )
}
