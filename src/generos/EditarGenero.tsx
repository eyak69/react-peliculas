import React from "react";
import EditarEntidad from "../utils/EditarEntidad";
import { urlGeneros } from "../utils/endpoints";
import FormularioGenero from "./FormularioGenero";
import { generoCreacionDTO, generoDTO } from "./genero.model";

export default function EditarGenero() {

    return (
        <>
            <EditarEntidad<generoCreacionDTO, generoDTO>
                url={urlGeneros} urlIndice={'/generos'} nombreEntidad='Generos'>
                {(entidad, editar) =>
                    <FormularioGenero
                        modelo={entidad}
                        onSubmit={async valores => {
                            await editar(valores);
                        }}
                    />}
            </EditarEntidad>
        </>
    )
}