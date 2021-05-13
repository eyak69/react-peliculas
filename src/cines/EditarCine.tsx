import React from "react";
import EditarEntidad from "../utils/EditarEntidad";
import { urlCines } from "../utils/endpoints";
import { cineCreacionDTO, cineDTO } from "./cine.model";
import FormularioCine from "./FormularioCine";

export default function EditarCine(){
    return (
        <>
            <EditarEntidad<cineCreacionDTO, cineDTO>
                url={urlCines} urlIndice={'/cines'} nombreEntidad='Cines'>
                {(entidad, editar) =>
                    <FormularioCine
                        modelo={entidad}
                        onSubmit={async valores => {
                            await editar(valores);
                        }}
                    />}
            </EditarEntidad>
        </>
    )
}