import { Form, Formik, FormikHelpers } from "formik";
import { peliculaCreacionDTO } from "./peliculas.model";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import FormGroupCheckbox from "../utils/FormGroupCheckbox";
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";
import Boton from "../utils/Boton";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SelectorMultiple, { selectorMultipleModel } from "../utils/SelectorMultiple";
import { generoDTO } from "../generos/genero.model";
import { cineDTO } from "../cines/cine.model";

export default function FormularioPelicula(props: formularioPeliculaProps) {
    const [generosSeleccionados, setGenerosSeleccionados] = useState(mapear(props.generosSeleccionados));
    const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState(mapear(props.generosNoSeleccionados));

    const [cinesSeleccionados, setCinesSeleccionados] = useState(mapear(props.cinesSeleccionados));
    const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState(mapear(props.cinesNoSeleccionados));

    function mapear(arreglo: { id: number, nombre: string }[]): selectorMultipleModel[] {
        return arreglo.map(valor => {
            return { llave: valor.id, valor: valor.nombre }
        })
    }

    return (

        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                titulo: Yup.string().required("El campo es requerido").primeraLetraMayuscula(),

            })}>

            {propsformik => (
                <Form>
                    <FormGroupText campo="titulo" label="Titulo"></FormGroupText>
                    <FormGroupCheckbox campo="enCines" label='En cines' />
                    <FormGroupText campo="trailer" label="Trailer"></FormGroupText>
                    <FormGroupFecha campo="fechaLanzamiento" label='Fecha Lanzamiento' />
                    <FormGroupImagen campo='poster' label='Poster' imagenURL={props.modelo.posterURL} />
                    <div className="form-group">
                        <label>Géneros:</label>
                        <SelectorMultiple seleccionados={generosSeleccionados}
                            noSeleccionados={generosNoSeleccionados}
                            onChange={(seleccionados, noSeleccionados) => {
                                setGenerosSeleccionados(seleccionados)
                                setGenerosNoSeleccionados(noSeleccionados);
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label>Cines:</label>
                        <SelectorMultiple seleccionados={cinesSeleccionados}
                            noSeleccionados={cinesNoSeleccionados}
                            onChange={(seleccionados, noSeleccionados) => {
                                setCinesSeleccionados(seleccionados)
                                setCinesNoSeleccionados(noSeleccionados);
                            }}
                        />
                    </div>

                    <Boton disabled={propsformik.isSubmitting} type='submit'>Enviar</Boton>
                    <Link className='btn btn-secondary' to='/'>Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formularioPeliculaProps {
    modelo: peliculaCreacionDTO;
    onSubmit(valores: peliculaCreacionDTO, accion: FormikHelpers<peliculaCreacionDTO>): void;
    generosSeleccionados: generoDTO[];
    generosNoSeleccionados: generoDTO[];
    cinesSeleccionados: cineDTO[];
    cinesNoSeleccionados: cineDTO[];

}