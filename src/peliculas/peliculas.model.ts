import { actorPeliculaDTO } from "../actores/actor.model";
import { cineDTO } from "../cines/cine.model";
import { generoDTO } from "../generos/genero.model";

    export interface peliculaDTO {
        id: number;
        titulo: string;
        poster: string;
        enCines: boolean;
        trailer: string;
        resumen?: string;
        fechaLanzamiento: Date;
        cines: cineDTO[];
        generos: generoDTO[];
        actores: actorPeliculaDTO[];
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
        enCartelera?: peliculaDTO[];
        enEstreno?: peliculaDTO[];
    }