/* eslint-disable */

import UnPersonaje from "./UnPersonaje";

function ListadoPersonajes(props) {

    const { personajes } = props

    //console.log(personajes)
    return (
        <>
            <h2>Los Personajes</h2>

            <div className='listado-personajes'>
                {
                    personajes.map((personaje) =>
                        <UnPersonaje {...personaje} />
                    )
                }
            </div>
        </>
    )
}


export default ListadoPersonajes;