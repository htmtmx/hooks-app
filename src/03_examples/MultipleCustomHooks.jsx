import { useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
    useFetch({pokeName: 'pikachu'});
    useFetch({pokeName: 'charmander'});
    useFetch({pokeId: '4'});
    return (
        <div>MultipleCustomHooks</div>
    )
}
