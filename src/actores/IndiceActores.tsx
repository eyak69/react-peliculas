import React from "react";
import { Link } from "react-router-dom";
import { urlActores } from "../utils/endpoints";
import IndiceEntidad from "../utils/IndiceEntidad";
import { actorDTO } from "./actor.model";

export default function IndiceActores() {
    return (
            <>
            <IndiceEntidad<actorDTO>
                url={urlActores} urlCrear="actor/crear" titulo="Actor"
                nombreEntidad="Actor"
            >
                {(actores, botones) => <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {actores?.map(actor =>
                            <tr key={actor.id}>
                                <td>
                                    {botones(`actor/editar/${actor.id}`, actor.id)}
                                </td>
                                <td>
                                    {actor.nombre}
                                </td>
                            </tr>)}
                    </tbody>
                </>}
    
            </IndiceEntidad>
    
        </>
        
    )
}