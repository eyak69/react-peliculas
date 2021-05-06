import React from "react";
import FormularioCine from "./FormularioCine";

export default function EditarCine(){
    return(
       
        <>
        <h3>Editar Cine</h3>
        <FormularioCine
            modelo={
                { nombre: 'Accion' }
            }
            onSubmit={async valores => {
                await new Promise(r => setTimeout(r, 3000));
                console.log(valores);
            }
            }/>
    </>
    )
}