import React from "react";
import { Link } from "react-router-dom";
import FormularioActor from "./FormularioActor";

export default function IndiceActores() {
    return (
        <>
            <h3>Indice Actores</h3>
            <Link to='actor/crear'>Crear Actor</Link>
        </>
    )
}