import Especie from "./Especie";

function UnPersonaje(personaje) {

    const { id, image, name, species } = personaje;

    return (
        <>
            <div className="personaje" key={id}>
                <img src={image} />
                <h5>id:{id}</h5>
                <h4 style={{ fontSize: '2.2rem' }}>{name}</h4>
                <Especie especie={species} />
            </div>
        </>
    )
}
export default UnPersonaje;