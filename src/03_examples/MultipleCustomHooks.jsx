import { useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
    const { data, hasError, isLoading } = useFetch('https://pokeapi.co/api/v2/pokemon/charmander');
    
    return (
        <>
            <div>MultipleCustomHooks</div>
            {isLoading && <p>Loading...</p>}
            <pre>{data?.name}</pre>
        </>
    )
}
