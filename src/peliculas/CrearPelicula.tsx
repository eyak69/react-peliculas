import { cineDTO } from "../cines/cine.model";
import { generoDTO } from "../generos/genero.model";
import FormularioPelicula from "./FormularioPelicula";

export default function CrearPelicula() {
    const generos: generoDTO[] = [{ id: 1, nombre: 'Acción' },
    { id: 2, nombre: 'Drama' },
    { id: 3, nombre: 'Comedia' }]
    const cines: cineDTO[] = [{ id: 1, nombre: 'Agora' }, { id: 2, nombre: 'Sambil' }]



    return (
        <>
            <h3>Crear Pelicula</h3>
            <FormularioPelicula
                actoresSeleccionados={[]}
                cinesNoSeleccionados={cines}
                cinesSeleccionados={[]}
                generosNoSeleccionados={generos}
                generosSeleccionados={[]}
                modelo={{ titulo: '', enCineas: false, trailer: '', fechaLanzamiento: undefined }}
                onSubmit={valores => console.log(valores)}
            ></FormularioPelicula>
        </>
    )
}