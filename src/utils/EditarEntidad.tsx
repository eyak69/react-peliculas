import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { generoDTO, generoCreacionDTO } from "../generos/genero.model";
import { urlGeneros } from "./endpoints";
import MostrarErrores from "./MostrarErrores";

export default function EntidadEntidad(props: entidadEntidadProps){
    const { id }: any = useParams();
    const [entidad, setEntidad] = useState<generoDTO>();
    const [errores, setErrores] = useState<string[]>([]);
    const history = useHistory();
    useEffect(() => {
        axios.get(`${props.url}/${id}`)
            .then((respuesta: AxiosResponse<generoDTO>) => {
                setEntidad(respuesta.data);
            })
    })

    async function editar(generoEditar: generoCreacionDTO) {
        try {
            await axios.put(`${props.url}/${id}`, generoEditar);
            history.push(props.urlIndice)
        } catch (error) {
            setErrores(error.response.data);
        }
    }

    return (
        <>
            <h3>Editar Genero</h3>
            <MostrarErrores errores={errores} />
        </>
    )

}

interface entidadEntidadProps{
    url:string;
    urlIndice : string;

}