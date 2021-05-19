import { actorPeliculaDTO } from "../actores/actor.model";
import { cineDTO } from "../cines/cine.model";
import { generoDTO } from "../generos/genero.model";

    export interface pelicula {
        id: number;
        titulo: string;
        poster: string;
    }

    export interface peliculasPostGetDTO{
        cines : cineDTO[];
        generos : generoDTO[];
    }


    export interface peliculaCreacionDTO{
        titulo: string;
        enCines: boolean;
        trailer: string;
        fechaLanzamiento?: Date;
        poster?: File;
        posterURL?:string;
        generosIds?: number[];
        cinesIds?: number[];
        resumen?: string;
        actores?:actorPeliculaDTO[]
    }

    export interface landingPageDTO {
        enCartelera?: pelicula[];
        enEstreno?: pelicula[];
    }