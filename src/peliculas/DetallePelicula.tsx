import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import Cargando from "../utils/Cargando";
import { urlPeliculas } from "../utils/endpoints";
import { peliculaDTO } from "./peliculas.model";

function DetallePelicula() {
    const { id }: any = useParams();
    const [pelicula, setPelicula] = useState<peliculaDTO>();

    useEffect(() => {
        axios.get(`${urlPeliculas}/${id}`).
            then((respuesta: AxiosResponse<peliculaDTO>) => {
                respuesta.data.fechaLanzamiento = new Date(respuesta.data.fechaLanzamiento);
                setPelicula(respuesta.data);
            })
    }, [id])

    return (
        pelicula ?
            <div style={{ display: 'flex' }}>
                <div>
                    <h2>{pelicula.titulo}({pelicula.fechaLanzamiento.getFullYear()})</h2>
                    {pelicula.generos?.map(genero =>
                        <Link key={genero.id}
                            style={{ marginRight: '5px' }}
                            className='btn btn-primary btn-sm rounded-pill'
                            to={`/pelicula/filtrar?generoId=${genero.id}`}>{genero.nombre}</Link>)
                    }
                    | {pelicula.fechaLanzamiento.toDateString()}
                    <div style={{ display: 'flex', marginTop:'1rem' }}>
                        <span style={{display:'inline-block',marginRight:'1rem'}}>
                            <img src = {pelicula.poster}
                                 style={{width:'225px',height:'315px'}}
                                 alt='poster'>
                            </img>
                        </span>
                    </div>
                </div>
            </div> :
            <Cargando />
    )
}

export default DetallePelicula