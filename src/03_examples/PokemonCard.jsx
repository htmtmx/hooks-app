import PropTypes from 'prop-types'

export const PokemonCard = ({id=1, pokeName='', sprites=[]}) => {
    return (
        <section className='card p-4 bg-light border border-dark rounded shadow text-center w-50 h-auto d-flex align-items-center justify-content-center'>
            <span>{id}</span>
            <h4 className=''>{pokeName}</h4>
            <div className='container'>
            {sprites.map((sprite) => {
                return (
                    <img key={sprite} src={sprite} alt={pokeName} />
                )
            })}
            </div>
      </section>
  )
}

PokemonCard.propTypes = {
    id: PropTypes.number.isRequired,
    pokeName: PropTypes.string.isRequired,
    sprites: PropTypes.array.isRequired
}
