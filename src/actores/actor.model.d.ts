export interface actorCreacionDTO {
    nombre: string;
    fechaNacimiento?: Date;
    foto?: File;
    fotoURL?:string;
}

export interface actorPeliculaDTO {
    id: number;
    nombre: string;
    personaje: string;
    foto: string;
}