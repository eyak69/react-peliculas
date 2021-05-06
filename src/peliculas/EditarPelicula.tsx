import { cineDTO } from "../cines/cine.model";
import { generoDTO } from "../generos/genero.model";
import FormularioPelicula from "./FormularioPelicula";

export default function EditarPelicula() {
    const generosNoSeleccionados: generoDTO[] = [
        { id: 2, nombre: 'Drama' }]
    const generosSeleccionados: generoDTO[] = [{ id: 1, nombre: 'Acción' },
    { id: 3, nombre: 'Comedia' }]

    const cinesSeleccionados: cineDTO[] = [{ id: 2, nombre: 'Sambil' }]
    const cinesNoSeleccionados: cineDTO[] = [{ id: 1, nombre: 'Agora' }]

    return (
        <>
            <h3>Editar Pelicula</h3>
            <FormularioPelicula
                cinesSeleccionados={cinesSeleccionados}
                cinesNoSeleccionados={cinesNoSeleccionados}
                generosNoSeleccionados={generosNoSeleccionados}
                generosSeleccionados={generosSeleccionados}
                modelo={{ titulo: 'Spider-Man', enCineas: false, trailer: '', fechaLanzamiento: new Date('2020-10-06T00:00:00'), posterURL: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg' }}
                onSubmit={valores => console.log(valores)}
            />

        </>
    )
}