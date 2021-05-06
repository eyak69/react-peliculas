import { Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import Boton from "../utils/Boton";
import FormGroupText from "../utils/FormGroupText";
import { cineCreacionDTO } from "./cine.model";


export default function FormularioCine(props:formularioCineProps) {
    return(
        <Formik initialValues={props.modelo}
                onSubmit={props.onSubmit}
                validationSchema={Yup.object({ nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()})}
            >
                {/* son los props de formik */}
                { (formikProps) =>
                <Form>
                    <FormGroupText campo='nombre' label='Nombre' placeholder='Nombre'/>
                    <Boton disabled={formikProps.isSubmitting} type='submit'>Salvar</Boton>
                    <Link className='btn btn-secondary' to='/cines'>Cancelar</Link>
                </Form>
                }
            </Formik>
    )
}

interface formularioCineProps {
   modelo : cineCreacionDTO;
   onSubmit(valores: cineCreacionDTO, accion: FormikHelpers<cineCreacionDTO>): void;
}