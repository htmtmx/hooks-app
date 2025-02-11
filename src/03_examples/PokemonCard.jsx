import PropTypes from 'prop-types'
import { useState, useRef, useLayoutEffect } from 'react';

export const PokemonCard = ({ id = 1, pokeName = '', sprites = [] }) => {

    const [boxSize, setBoxSize] = useState({height: 0, width: 0});
    
    const h4Ref = useRef();
    useLayoutEffect(() => {
        
        const { height, width } = h4Ref.current.getBoundingClientRect();
        setBoxSize({height, width});
      
    }, [pokeName]);
    
    return (
        <section className='card p-4 bg-light border border-dark rounded shadow text-center w-50 h-auto d-flex align-items-center justify-content-center'>
            <span>{id}</span>
            <h4 ref={h4Ref} className=''>{pokeName}</h4>
            <div className='container'>
            {sprites.map((sprite) => {
                return (
                    <img key={sprite} src={sprite} alt={pokeName} />
                )
            })}
            </div>
            <pre>{JSON.stringify(boxSize)}</pre>
      </section>
  )
}

PokemonCard.propTypes = {
    id: PropTypes.number.isRequired,
    pokeName: PropTypes.string.isRequired,
    sprites: PropTypes.array.isRequired
}
