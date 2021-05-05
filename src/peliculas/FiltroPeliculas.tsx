import React from "react";
import { Link } from "react-router-dom";

export default function FiltroPeliculas(){
    return(
        <>
        <h3>Filtro Peliculas</h3>
        <Link to='/pelicula/crear'>Crear Pelicula</Link>
        </>
    )
}