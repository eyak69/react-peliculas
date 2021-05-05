import React from "react";
import { Link } from "react-router-dom";

export default function IndiceActores() {
    return (
        <>
            <h3>Indice Actores</h3>
            <Link to='actor/crear'>Crear Actores</Link>
        </>
    )
}