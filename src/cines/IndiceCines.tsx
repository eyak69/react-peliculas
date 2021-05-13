import React from "react";
import { Link } from "react-router-dom";
import { urlCines } from "../utils/endpoints";
import IndiceEntidad from "../utils/IndiceEntidad";
import { cineDTO } from "./cine.model";

export default function IndiceCines() {
    return (
        <>
        <IndiceEntidad<cineDTO>
            url={urlCines} urlCrear="cine/crear" titulo="Cines"
            nombreEntidad="Cines"
        >
            {(cines, botones) => <>
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {cines?.map(cine =>
                        <tr key={cine.id}>
                            <td>
                                {botones(`cine/editar/${cine.id}`, cine.id)}
                            </td>
                            <td>
                                {cine.nombre}
                            </td>
                        </tr>)}
                </tbody>
            </>}

        </IndiceEntidad>

    </>
    )
}