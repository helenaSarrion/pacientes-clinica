import React, { Fragment, useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if (!citasIniciales) { //si las citas iniciales no existen se creara un array vacio
    citasIniciales = [];
  }
  const [citas, guardarCitas] = useState(citasIniciales);

  //useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas)) //se guarda en el local storage las citas
    } else {
      localStorage.setItem('citas', JSON.stringify([])) //si no hay citas se guarda un array vacio
    }
  }, [citas, citasIniciales])

  const crearCita = cita => {
    guardarCitas([...citas, cita]); //se guarda la cita en el state de citas
  }


  //esta funcion nos permitira eliminar una cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas);
  }



  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';


  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <hr />
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half-column">
            <hr />
            <h2>{titulo}</h2>
            {citas.map(cita => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;