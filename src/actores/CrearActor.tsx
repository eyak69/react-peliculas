import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlActores, urlGeneros } from "../utils/endpoints";
import { convertirActorAFormData } from "../utils/formDataUtils";
import MostrarErrores from "../utils/MostrarErrores";
import { actorCreacionDTO } from "./actor.model";
import FormularioActor from "./FormularioActor";

export default function CrearActor() {
    const history = useHistory();
    const [errores, setErrores] = useState<string[]>([]);

    async function crear(actor: actorCreacionDTO) {
        try {
            const formData = convertirActorAFormData(actor);
            await axios({
                method: 'post',
                url: urlActores,
                data: formData,
                headers:{'Content-Type':'multipart/form-data'}
            })
            //await axios.post(urlActores, actor);
            history.push('/actores');
        }
        catch (error) {
            setErrores(error.response.data);
            console.error(error.response.data);            
        }
    }

    return (
        <>
            <h3>Crear Actor</h3>
            <MostrarErrores errores={errores} />
            <FormularioActor
                modelo={{ nombre: '', fechaNacimiento: undefined }}
                onSubmit={async valores => {
                    await crear(valores);
                }
                }></FormularioActor>
        </>
    )
}