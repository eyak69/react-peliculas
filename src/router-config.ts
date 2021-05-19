import CrearActor from "./actores/CrearActor";
import EditarActor from "./actores/EditarActor";
import IndiceActores from "./actores/IndiceActores";
import CrearCine from "./cines/CrearCine";
import EditarCine from "./cines/EditarCine";
import IndiceCines from "./cines/IndiceCines";
import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import IndiceGeneros from "./generos/IndiceGeneros";
import LandingPage from "./LandingPage";
import CrearPelicula from "./peliculas/CrearPelicula";
import DetallePelicula from "./peliculas/DetallePelicula";
import EditarPelicula from "./peliculas/EditarPelicula";
import FiltroPeliculas from "./peliculas/FiltroPeliculas";

const rutas = [
    {path:'/genero/crear', componente: CrearGenero},
    {path:'/genero/editar/:id(\\d+)', componente: EditarGenero},
    {path:'/generos', componente: IndiceGeneros, exact: true},

    {path:'/actor/crear', componente: CrearActor},
    {path:'/actor/editar/:id(\\d+)', componente: EditarActor},
    {path:'/actores', componente: IndiceActores, exact: true},

    {path:'/cine/crear', componente: CrearCine},
    {path:'/cine/editar/:id(\\d+)', componente: EditarCine},
    {path:'/cines', componente: IndiceCines, exact: true},

    {path:'/pelicula/:id(\\d+)', componente: DetallePelicula},
    {path:'/pelicula/crear', componente: CrearPelicula},
    {path:'/pelicula/editar/:id(\\d+)', componente: EditarPelicula},
    {path:'/pelicula/filtrar', componente: FiltroPeliculas, exact: true},

    {path:'/', componente: LandingPage, exact: true},

   // {path:'*', componente: RedirectARoot}
];
export default rutas;