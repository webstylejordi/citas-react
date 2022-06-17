import { useState } from 'react';

import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
  const [pacientes, setPacientes]=useState([]);
  const [paciente, setPaciente]=useState({});

  const eliminarPaciente = (id) => {
    console.log("eliminando paciente " , id);
  }
 

  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className='md:flex mt-12'>
        <Formulario
           pacientes = {pacientes}
           setPacientes= {setPacientes}
           paciente = {paciente}
           setPaciente = {setPaciente}
   
        />
        <ListadoPacientes
          pacientes = {pacientes}
          setPaciente = {setPaciente} //para modificiar un solo paciente
          eliminarPaciente ={eliminarPaciente}

        />
      </div>

    </div>
  )
}

export default App
