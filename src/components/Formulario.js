import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Form from "../estiloFormulario";
import Boton from "../estiloBoton";
import H2 from "../estilosH2";
import Label from "../estilosLabel";

//const Formulario sirve para crear una cita nueva y añadirla al array de citas del componente principal 
const Formulario = ({crearCita}) => {
    const [cita, actualizarCita] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        alta: '',
        sintomas: ''
    })

    const [error, actualizarError] = useState(false)

    //Función que se ejecuta cada vez que el usuario escribe en un input 
    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const {nombre, apellidos, email, telefono, alta, sintomas} = cita;

    //Cuando el usuario pulsa en el boton de agregar cita se ejecuta esta función 
    const submitCita = e =>{
        e.preventDefault();
        if(nombre.trim() === '' || apellidos.trim() === '' || email.trim() === '' || telefono.trim() === '' || alta.trim() === '' || sintomas.trim() === ''){
            actualizarError(true);
            return;
        }

        actualizarError(false);

        cita.id = Date.now();
        console.log(cita);

        crearCita(cita);

        actualizarCita({
            nombre: '',
            apellidos: '',
            email: '',
            telefono: '',
            alta: '',
            sintomas: ''
        })
        
    }

    return (
        <Fragment>
            <H2>Crear Cita</H2>
            {/**Si error es true se muestra el mensaje de error */}
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <Form onSubmit={submitCita}>
                <Label>Nombre</Label>
                <input type="text" name="nombre" className="u-full-width" placeholder="Nombre" onChange={handleChange} value={nombre}/>
                <Label>Apellidos</Label>
                <input type="text" name="apellidos" className="u-full-width" placeholder="Apellidos" onChange={handleChange} value={apellidos}/>
                <Label>Email</Label>
                <input type="email" name="email" className="u-full-width" placeholder="Email" onChange={handleChange} value={email} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                <Label>Teléfono</Label>
                <input type="tel" name="telefono" className="u-full-width" placeholder="Teléfono" onChange={handleChange} value={telefono} pattern="[0-9]{9}"/>
                <Label>Fecha Alta</Label>
                <input type="date" name="alta" className="u-full-width" onChange={handleChange} value={alta} />
                <Label>Síntomas</Label>
                <textarea className="u-full-width" name="sintomas" onChange={handleChange} value={sintomas}></textarea>
                <Boton type="submit" className="u-full-width button-primary">Agregar Cita</Boton>
            </Form>
        </Fragment>
    );

}
Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;