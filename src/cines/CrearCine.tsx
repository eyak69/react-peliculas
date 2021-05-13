import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FormularioGenero from "../generos/FormularioGenero";
import { urlCines } from "../utils/endpoints";
import MostrarErrores from "../utils/MostrarErrores";
import { cineCreacionDTO } from "./cine.model";
import FormularioCine from "./FormularioCine";

export default function CrearCine(){
    const history = useHistory();
    const [errores, setErrores] = useState<string[]>([]);

    async function crear(cine: cineCreacionDTO) {
        try {
            await axios.post(urlCines, cine);
            history.push('/cines');
        }
        catch (error) {
            setErrores(error.response.data);
            console.error(error.response.data);            
        }
    }

    return (
        <>
            <h3>Crear Cine</h3>
            <MostrarErrores errores={errores} />
            <FormularioCine
                modelo={
                    { nombre: '' }
                }
                onSubmit={async valores => {
                    await crear(valores);
                }
                }></FormularioCine>
        </>
    )
}