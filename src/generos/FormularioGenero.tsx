import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import Boton from "../utils/Boton";
import FormGroupText from "../utils/FormGroupText";
import { generoCreacionDTO } from "./genero.model";

export default function FormularioGenero(props:formularioGeneroProps) {
    return(
        <Formik initialValues={props.modelo}
                onSubmit={props.onSubmit}
                validationSchema={Yup.object({ nombre: Yup.string().required('Este campo es requerido')
                .max(50,'La longitud maxima es de 50 caracteres')})}
            >
                {/* son los props de formik */}
                { (formikProps) =>
                <Form>
                    <FormGroupText campo='nombre' label='Nombre' placeholder='Nombre'/>
                    <Boton disabled={formikProps.isSubmitting} type='submit'>Salvar</Boton>
                    <Link className='btn btn-secondary' to='/generos'>Cancelar</Link>
                </Form>
                }
            </Formik>
    )
}

interface formularioGeneroProps {
   modelo : generoCreacionDTO;
   onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;
}