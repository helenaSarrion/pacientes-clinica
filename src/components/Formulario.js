import styled from "styled-components";
import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
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

    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const {nombre, apellidos, email, telefono, alta, sintomas} = cita;

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
            <h2>Crear Cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form onSubmit={submitCita}>
                <label>Nombre</label>
                <input type="text" name="nombre" className="u-full-width" placeholder="Nombre" onChange={handleChange} value={nombre} />
                <label>Apellidos</label>
                <input type="text" name="apellidos" className="u-full-width" placeholder="Apellidos" onChange={handleChange} value={apellidos} />
                <label>Email</label>
                <input type="email" name="email" className="u-full-width" placeholder="Email" onChange={handleChange} value={email} />
                <label>Teléfono</label>
                <input type="tel" name="telefono" className="u-full-width" placeholder="Teléfono" onChange={handleChange} value={telefono} />
                <label>Fecha Alta</label>
                <input type="date" name="alta" className="u-full-width" onChange={handleChange} value={alta} />
                <label>Síntomas</label>
                <textarea className="u-full-width" name="sintomas" onChange={handleChange} value={sintomas}></textarea>
                <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </Fragment>
    );

}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario;