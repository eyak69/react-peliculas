import React from "react";
import EditarEntidad from "../utils/EditarEntidad";
import { urlActores } from "../utils/endpoints";
import { convertirActorAFormData } from "../utils/formDataUtils";
import { actorCreacionDTO, actorDTO } from "./actor.model";
import FormularioActor from "./FormularioActor";

export default function EditarActor() {
    const transformar = (actor: actorDTO) => {
        return {
            nombre: actor.nombre,
            fotoURL: actor.foto,
            biografia: actor.biografia,
            fechaNacimiento: new Date(actor.fechaNacimiento)
        }
    }
    return (
        <>
            <h3>Editar Actor</h3>

           <EditarEntidad<actorCreacionDTO, actorDTO>
                url={urlActores} urlIndice="/actores" nombreEntidad="Actores"
                transformarFormData={convertirActorAFormData}
                transformar={transformar}
                >
                {(entidad, editar) =>
                    <FormularioActor
                        modelo={entidad}
                        onSubmit={async valores => await editar(valores)}
                    />}
            </EditarEntidad>
        </>
    )
}