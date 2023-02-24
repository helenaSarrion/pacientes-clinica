import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const Cita = ({ cita, eliminarCita }) => {
    return (
        <div className="cita">
            <p>Nombre: <span>{cita.nombre}</span></p>
            <p>Apellidos: <span>{cita.apellidos}</span></p>
            <p>Email: <span>{cita.email}</span></p>
            <p>Teléfono: <span>{cita.telefono}</span></p>
            <p>Fecha Alta: <span>{cita.alta}</span></p>
            <p>Síntomas: <span>{cita.sintomas}</span></p>
            <button className="button eliminar u-full-width" onClick={() => eliminarCita(cita.id)}>Eliminar &times;</button>
        </div>
    )
}

Cita.prototype={
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;