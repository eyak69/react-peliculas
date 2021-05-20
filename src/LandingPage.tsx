import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/peliculas.model";
import { urlPeliculas } from "./utils/endpoints";

export default function LandingPage() {
    const timerTime = 500;
    const [peliculas, setPeliculas] = useState<landingPageDTO>({});


    useEffect(() => {
        axios.get(urlPeliculas).
            then((respuesta: AxiosResponse<landingPageDTO>) => {
                setPeliculas(respuesta.data)
            })
    }, [])

    return (
        <>
            <h3>Peliculas en Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCines} />

            <h3>Peliculas en Estreno</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </>
    )
}