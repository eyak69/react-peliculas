import FormularioCine from "./FormularioCine";

export default function CrearCine(){
    return(
        

        <>
        <h3>Crear Cine</h3>
        <FormularioCine 
        modelo={
                {nombre:''}
               } 
        onSubmit= { async valores => 
                   { 
                    await new Promise(r => setTimeout(r, 3000));
                    console.log(valores);
                   }
                  }></FormularioCine>
      </>
    )
}