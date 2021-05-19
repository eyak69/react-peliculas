import PeliculaIndividual from "./PeliculaIndividual";
import { peliculaDTO } from "./peliculas.model";
import css from './ListadoPeliculas.module.css'
import ListadoGenerico from "../utils/ListadoGenerico";

export default function  ListadoPeliculas(props:listadoPeliculasProps){


        return(
        <ListadoGenerico listado = {props.peliculas} >            
            <div className = {css.div} >{props.peliculas?.map(unapelicula => 
            <PeliculaIndividual 
               pelicula = {unapelicula} 
               key = {unapelicula.id}
            />)}</div>
            </ListadoGenerico>
        );

    
}

interface listadoPeliculasProps {
    peliculas?: peliculaDTO[];
}