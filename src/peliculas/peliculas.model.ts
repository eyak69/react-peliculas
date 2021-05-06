    export interface pelicula {
        id: number;
        titulo: string;
        poster: string;
    }

    export interface peliculaCreacionDTO{
        titulo: string;
        enCineas: boolean;
        trailer: string;
        fechaLanzamiento?: Date;
        poster?: File;
        posterURL?:string;
        generosIds?: number[];
    }

    export interface landingPageDTO {
        enCartelera?: pelicula[];
        enEstreno?: pelicula[];
    }