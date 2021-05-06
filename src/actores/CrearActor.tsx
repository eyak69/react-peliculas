import React from "react";
import FormularioActor from "./FormularioActor";

export default function CrearActor() {
    return (
        <>
            <h3>Crear Actor</h3>
            <FormularioActor
                modelo={{ nombre: '', fechaNacimiento: undefined }}
                onSubmit={valores => console.log(valores)} />
        </>
    )
}