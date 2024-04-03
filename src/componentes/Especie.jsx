/* eslint-disable */

import { ThemeContext } from "../context/ThemeContext";
import React, { useContext } from 'react';

function Especie(props) {

    const settings = useContext(ThemeContext);

    console.log('EL TEMA DEL CONTEXTO:   ', settings);




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