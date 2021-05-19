import React, { useEffect, useState } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/peliculas.model";

export default function LandingPage() {
    const timerTime = 500;
    const [peliculas, setPeliculas] = useState<landingPageDTO>({});

    useEffect(() => {
        const timerId = setTimeout(() => {
            setPeliculas({
                enCartelera: [],
                enEstreno: []
            })
        }, timerTime);
        return () => clearTimeout(timerId);
    })

    return (
        <>
            <h3>Peliculas en Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera} />

            <h3>Peliculas en Estreno</h3>
            <ListadoPeliculas peliculas={peliculas.enEstreno} />
        </>
    )
}