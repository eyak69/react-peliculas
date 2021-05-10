import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Boton from "../utils/Boton";
import { urlGeneros } from "../utils/endpoints";
import IndiceEntidad from "../utils/IndiceEntidad";
import ListadoGenerico from "../utils/ListadoGenerico";
import Paginacion from "../utils/Paginacion";
import { generoDTO } from "./genero.model";

export default function IndiceGeneros() {
    return (
        <>
        <IndiceEntidad<generoDTO>
            url={urlGeneros} urlCrear="genero/crear" titulo="Géneros"
            nombreEntidad="Género"
        >
            {(generos, botones) => <>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {generos?.map(genero =>
                        <tr key={genero.id}>
                            <td>
                                {botones(`genero/editar/${genero.id}`, genero.id)}
                            </td>
                            <td>
                                {genero.nombre}
                            </td>
                        </tr>)}
                </tbody>
            </>}

        </IndiceEntidad>

    </>
    )
}