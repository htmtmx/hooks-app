import PropTypes from 'prop-types';
import { useEffect, useState } from 'react'

export const useFetch = ({pokeName, pokeId}) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFetch();
    }, [])

    const getFetch = async () => {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName || pokeId}`);
        const data = await resp.json();
        setState({...state, ['data']: data})
        console.log(data);
    }
    

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}

useFetch.propTypes = {
    pokeName: PropTypes.string,
    pokeId: PropTypes.string
}