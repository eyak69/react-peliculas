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

    function generarUrlYoutuve(url: any): string {
        if (!url) {
            return '';
        }
        var video_id = url.split('v=')[1];
        var posicionAmpersand = video_id.indexOf('&');
        if (posicionAmpersand != -1) {
            video_id = video_id.substring(0, posicionAmpersand);
        }
        console.log(video_id);
        return `https://www.youtube.com/embed/${video_id}`

    }

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
                    <div style={{ display: 'flex', marginTop: '1rem' }}>
                        {pelicula.poster ?
                            <span style={{ display: 'inline-block', marginRight: '1rem' }}>
                                <img src={pelicula.poster}
                                    style={{ width: '225px', height: '315px' }}
                                    alt='poster'>
                                </img>
                            </span>
                            : null}
                        {pelicula.trailer ?
                            <div>
                                <iframe
                                    title="youtube trailer"
                                    width='560'
                                    height='315'
                                    src={generarUrlYoutuve(pelicula.trailer)}
                                    frameBorder={0}
                                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                                    allowFullScreen />
                            </div> : null}
                    </div>

                    {pelicula.actores && pelicula.actores.length > 0 ?
                        <div style={{ marginTop: '1rem' }}>
                            <h3>Actores</h3>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {pelicula.actores.map(actor =>
                                    <div key={actor.id} style={{ marginBottom: '2px' }}>
                                        <img src={actor.foto}
                                            alt="foto"
                                            style={{ width: '50px', verticalAlign: 'middle' }} />
                                        <span style={{
                                            display: 'inline-block',
                                            width: '200px',
                                            marginLeft: '1rem'
                                        }}>
                                            {actor.nombre}
                                        </span>
                                        <span style={{
                                            display: 'inline-block',
                                            width: '45px',
                                        }}>
                                            ...
                                        </span>
                                        <span>{actor.personaje}</span>
                                    </div>
                                )}
                            </div>
                        </div> : null}

                    {pelicula.cines && pelicula.cines.length>0?
                    <div style={{ marginTop: '1rem' }}>
                        <h3>Cines</h3>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {pelicula.cines.map(cine=>
                                <div key={cine.id} style={{ marginBottom: '2px' }}>
                                        <span style={{
                                            display: 'inline-block',
                                            width: '200px',
                                            marginLeft: '1rem'
                                        }}>
                                            {cine.nombre}
                                        </span>
                                </div>
                                )}
                        </div>
                    </div>:null}                    
                </div>
            </div> :
            <Cargando />
    )
}

export default DetallePelicula