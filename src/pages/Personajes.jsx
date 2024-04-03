import { useEffect, useState } from "react";
import ListadoPersonajes from "../componentes/ListadoPersonajes";
import axios from "axios";
import Loader from "../componentes/Loader";
import Search from "../componentes/Search";

function Personajes() {

    const [personajesStore, setPersonajesStore] = useState([])

    const [infoStore, setInfoStore] = useState([])

    const [page, setPage] = useState(1)

    const [isLoading, setIsLoading] = useState(false)

    const [query, setQuery] = useState('')

    const seguientePagina = () => {

        console.log('sig Pagina click!')
        if (page > 41) {
            return
        }
        setPage(page + 1)

    }

    const anteriorPagina = () => {
        setPage(page - 1)
    }

    const getPersonajesFetch = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
        const data = await response.json();
        console.log(data);
        setPersonajesStore(data.results)
        setInfoStore(data.info)
    }

    const getPersonajesAxios = async () => {
        setIsLoading(true)
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
        console.log('se hizo la peticion a la api!')

        setTimeout(() => {
            setPersonajesStore(response.data.results)
            setInfoStore(response.data.info)
            setIsLoading(false)
        }, 1000); //1000ms ---> 1s 
    }


    useEffect(() => {
        getPersonajesFetch()
    }, [query])



    /*     useEffect(() => {
            getPersonajesAxios()
        }, [page]) */


    console.log(query)

    return (

        <div>
            <h1>Personajes</h1>

            <Search fnSearch={setQuery} />

            <h4>Cantidad de personajes: {infoStore.count} </h4>
            <h4>Cantidad de paginas: {infoStore.pages} </h4>
            <h4>Página Nro: {page} </h4>




            <button
                onClick={anteriorPagina}>
                ANTERIOR
            </button>

            <button
                onClick={seguientePagina}>
                SIGUIENTE
            </button>


            {
                isLoading === true ?

                    <div className="loader">
                        <Loader />
                    </div>
                    :
                    <ListadoPersonajes personajes={personajesStore} />

            }

        </div>
    )
}

export default Personajes