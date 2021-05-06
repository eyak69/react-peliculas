import React from "react";
import FormularioActor from "./FormularioActor";

export default function EditarActor() {
    return (
        <>
            <h3>Editar Actor</h3>
            <FormularioActor
                modelo={
                    {
                        nombre: 'Tom Holland',
                        fechaNacimiento: new Date('1996-06-01T00:00:00'),
                        fotoURL: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT2mdIv2oSgUO0zm7jZHboIgb1T7ligSAizsDiuDbOC94Dt8TZffj5WtNHFvoci'
                    }
                }
                onSubmit={valores => console.log(valores)} />
        </>
    )
}