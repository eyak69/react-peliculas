import React, { useEffect, useState } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/peliculas.model";

export default function LandingPage() {
    const timerTime = 500;
    const [peliculas, setPeliculas] = useState<landingPageDTO>({});

    useEffect(() => {
        const timerId = setTimeout(() => {
            setPeliculas({
                enCartelera:
                    [{
                        id: 1,
                        titulo: 'Spider-man: Far from Home',
                        poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
                    },
                    {
                        id: 2,
                        titulo: 'Moana',
                        poster: 'https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_UX182_CR0,0,182,268_AL_.jpg'
                    },
                    {
                        id: 3,
                        titulo: 'Inception',
                        poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
                    }],
                enEstreno: [{
                    id: 1,
                    titulo: 'Star Wars: The Clone Wars',
                    poster: 'https://m.media-amazon.com/images/M/MV5BZWFlNzRmOTItZjY1Ni00ZjZkLTk5MDgtOGFhOTYzNWFhYzhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
                }]
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