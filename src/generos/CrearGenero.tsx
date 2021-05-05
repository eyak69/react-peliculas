import { ErrorMessage, Field, Form, Formik } from "formik";
import { Console } from "node:console";
import React from "react";
import { useHistory } from "react-router"
import { Link } from "react-router-dom";
import Boton from "../utils/Boton";
import * as Yup from 'yup'

export default function CrearGenero() {
    // const history = useHistory();
    return (
        <>
            <h3>Crear Genero</h3>
            <Formik initialValues={{ nombre: '' }}
                onSubmit={valor => console.log(valor)}
                validationSchema={Yup.object({ nombre: Yup.string().required('Este campo es requerido') })}
            >

                <Form>
                    <div className='form-group'>
                        <label htmlFor="nombre">Nombre</label>
                        <Field name='nombre' className='form-control' />
                        <ErrorMessage
                            name='nombre'>
                            {mensaje =>
                                <div className='text-danger'>
                                    {mensaje}
                                </div>}
                        </ErrorMessage>
                    </div>
                    <Boton type='submit'>Salvar</Boton>
                    <Link className='btn btn-secondary' to='/generos'>Cancelar</Link>
                </Form>

            </Formik>

        </>
    )
}