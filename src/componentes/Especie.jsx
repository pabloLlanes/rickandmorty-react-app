/* eslint-disable */

function Especie(props) {

    const { especie } = props;

    //console.log(especie)
    let emoji;

    switch (especie) {
        case 'Human':
            emoji = '🙋‍'
            break;
        case 'Alien':
            emoji = '👽'
            break;
        case 'Robot':
            emoji = '🤖‍'
            break;

        default:
            emoji = '❓❓❓'
            break;
    }

    return (
        <>
            <h4 style={{ fontSize: '1.4rem' }}>Especie:{emoji}</h4>
        </>
    )
}

export default Especie;