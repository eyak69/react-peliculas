import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Boton from "../utils/Boton";
import FormGroupText from "../utils/FormGroupText";
import { actorCreacionDTO } from "./actor.model";
import * as Yup from 'yup'
import FormGroupFecha from "../utils/FormGroupFecha";
import FormGroupImagen from "../utils/FormGroupImagen";

export default function FormularioActor(props: formularioActorProps) {
    return (
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema=
            {Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula(),
                fechaNacimiento: Yup.string().required("El campo es requerido").nullable()
            })
            }>
            {(formikProps) => (
                <Form>
                    <FormGroupText campo='nombre' label='Nombre'></FormGroupText>
                    <FormGroupFecha campo='fechaNacimiento' label={'Fecha de Nacimiento'}/>
                    <FormGroupImagen campo="foto" label="Imagen" imagenURL = {props.modelo.fotoURL}/>
                    <Boton
                        disabled={formikProps.isSubmitting}
                        type='submit'>Salvar
                            </Boton>
                    <Link className='btn btn-secondary' to='/actores'>Cancelar</Link>
                </Form>
            )}

        </Formik>
    )
}

interface formularioActorProps {
    modelo: actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>): void;
}
