import { Field, Form, Formik } from "formik";
import { generoDTO } from "../generos/genero.model";
import Boton from "../utils/Boton";

export default function FiltroPeliculas() {
    const valorInicial: filtroPeliculaForm = {
        titulo: '',
        generoId: 0,
        proximoEstrenos: false,
        enCines: false
    };
    const generos: generoDTO[] = [
        { id: 1, nombre: 'Accion' },
        { id: 2, nombre: 'Drama' }
    ]
    return (
        <>
            <h3>Filtro Peliculas</h3>
            <Formik
                initialValues={valorInicial}
                onSubmit={valores => console.log(valores)}>
                {(formikprocs) => (
                    <Form>
                        <div className='form-inline'>
                            <div className='form-group mb-2'>
                                <label htmlFor="titulo" className='sr-only'>Titulo</label>
                                <input type="text"
                                    className='form-control'
                                    placeholder='titulo de la pelicula'
                                    {...formikprocs.getFieldProps('titulo')} />
                            </div>
                            <div className='form-group mx-sm-3 mb-2'>
                                <select className='form-control'
                                    {...formikprocs.getFieldProps('generoId')}>
                                    <option value="0">--Seleccione un genero--</option>
                                    {generos.map(valores =>
                                        <option value={valores.id} key={valores.id}>
                                            {valores.nombre}
                                        </option>)
                                    }
                                </select>
                            </div>
                            <div className='form-group mx-sm-3 mb-2'>
                                <Field className='form-check-input'
                                    id='proximoEstrenos'
                                    name='proximoEstrenos'
                                    type='checkbox'
                                />
                                <label className='form-check-label' htmlFor='proximoEstrenos'>
                                    Proximo Estrenos
                                     </label>


                            </div>

                            <div className='form-group mx-sm-3 mb-2'>
                                <Field className='form-check-input'
                                    id='enCines'
                                    name='enCines'
                                    type='checkbox'
                                />
                                <label className='form-check-label' htmlFor='enCines'>
                                    Proximo Estrenos
                                </label>
                            </div>
                            <Boton onClick={() => formikprocs.submitForm()}
                                className='btn btn-primary mb-2 mx-sm-3'>Filtrar
                            </Boton>

                            <Boton onClick={() => formikprocs.setValues(valorInicial)}
                                className='btn btn-danger mb-2'>Limpiar
                            </Boton>


                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}

interface filtroPeliculaForm {
    titulo: string;
    generoId: number;
    proximoEstrenos: boolean;
    enCines: boolean;
}
