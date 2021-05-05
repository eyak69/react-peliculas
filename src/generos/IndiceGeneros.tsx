import React from "react";
import { Link } from "react-router-dom";

export default function IndiceGeneros(){
    return(
        <>
        <h3>Indice Generos</h3>
        <Link to='genero/crear'>Crear Genero</Link>
        </>
    )
}