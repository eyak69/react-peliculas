import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlGeneros } from "../utils/endpoints";
import MostrarErrores from "../utils/MostrarErrores";
import FormularioGenero from "./FormularioGenero";
import { generoCreacionDTO } from "./genero.model";

export default function CrearGenero() {
    const history = useHistory();
    const [errores, setErrores] = useState<string[]>([]);

    async function crear(genero: generoCreacionDTO) {
        try {
            await axios.post(urlGeneros, genero);
            history.push('/generos');
        }
        catch (error) {
            setErrores(error.response.data);
            console.error(error.response.data);            
        }
    }

    return (
        <>
            <h3>Crear Genero</h3>
            <MostrarErrores errores={errores} />
            <FormularioGenero
                modelo={
                    { nombre: '' }
                }
                onSubmit={async valores => {
                    await crear(valores);
                }
                }></FormularioGenero>
        </>
    )
}