import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import Boton from "../estiloBoton";
import P from "../estilosP";

const Cita = ({ cita, eliminarCita }) => {
    return (
        <div className="cita">
            <P>Nombre: <span>{cita.nombre}</span></P>
            <P>Apellidos: <span>{cita.apellidos}</span></P>
            <P>Email: <span>{cita.email}</span></P>
            <P>Teléfono: <span>{cita.telefono}</span></P>
            <P>Fecha Alta: <span>{cita.alta}</span></P>
            <P>Síntomas: <span>{cita.sintomas}</span></P>
            <Boton className="button eliminar" onClick={() => eliminarCita(cita.id)}>Eliminar &times;</Boton>
        </div>
    )
}

Cita.prototype={
    cita: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}

export default Cita;