import { useState, useEffect } from 'react';
import Error from './Error';
import Paciente from './paciente';

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre]=useState('');
  const [propietario, setPropietario]=useState('');
  const [email, setEmail]=useState('');
  const [fecha, setFecha]=useState('');
  const [sintomas, setSintomas]=useState('');

  const [error, setError]= useState(false);

  useEffect( () =>  {
      if (Object.keys(paciente).length > 0 ) {
          setNombre(paciente.nombre)
          setPropietario(paciente.propietario)
          setEmail(paciente.email)
          setFecha(paciente.fecha)
          setSintomas(paciente.sintomas)
      }
  }  , [paciente]  )

 

  const GenerarId = () =>  {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)
    return  fecha + random 

  }



  const handleSubmit = (e) =>  {
      e.preventDefault();

      if ([nombre, propietario, email, fecha, sintomas].includes('') ) {
        console.log("hay al menos un campo vacio")
        setError(true)
        return
      }  
      setError(false);

      //Objeto paciente 

      const objetoPaciente =   {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
        id:GenerarId()
      };
 
      if (paciente.id) {
        //editand registro
        objetoPaciente.id = paciente.id 
        const pacientesActualizados =  pacientes.map( pacienteState => pacienteState.id === 
          paciente.id ? objetoPaciente :pacienteState )
          setPacientes(pacientesActualizados)
          setPaciente({})

      } else {
        //nuevo registro
        objetoPaciente.id = GenerarId() 
        setPacientes([...pacientes, objetoPaciente]);
      }

      

      //reiniciar el form 
      
      setNombre('');
      setPropietario('');
      setEmail('');
      setFecha('');
      setSintomas('');
     
  }

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>
          Seguimiento Pacientes
      </h2>
      <p className='text-lg  mt-3 text-center font-bold mb-5'>
           Añade pacientes y {''}
           <span className='text-indigo-600 font-bold'>administralos</span>
      </p>

      <form 
      className='bg-white shadow-md rounded-lg py-10 px-5 mb-10' 
      onSubmit={handleSubmit}
      >
        {error &&    <Error>todos los campos son obligatorios</Error>   }

 
          <div className='mb-5'>
              <label htmlFor='nombre' className='block text-gray-700 uppercase font-bold'>
                Nombre de la mascota  
                </label>
              <input 
              id="nombre"
              type="text"
              placeholder='nombre mascota'
              className='border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md'
              value={nombre}
              onChange={ (e)  => setNombre(e.target.value)}
              />
          </div>

          <div className='mb-5'>
              <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
              <input 
              id="propietario"
              type="text"
              placeholder='nombre del propietario'
              className='border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md'
              value={propietario}
              onChange={ (e)  => setPropietario(e.target.value)}
              />
          </div>

          <div className='mb-5'>
              <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
              <input 
              id="email"
              type="email"
              placeholder='email de contacto'
              className='border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md'
              value={email}
              onChange={ (e)  => setEmail(e.target.value)}
              />
          </div>

          <div className='mb-5'>
              <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Fecha Alta</label>
              <input 
              id="alta"
              type="date"
              value={fecha}
              onChange={ (e)  => setFecha(e.target.value)}
              />
          </div>

          <div className='mb-5'>
              <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
              <textarea
              id="sintomas"
              placeholder='describe los sintomas'
              className='border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md'
              value={sintomas}
              onChange={ (e)  => setSintomas(e.target.value)}
              />
          </div>

          <input 
            type="submit"
            className='text-white uppercase font-bold bg-indigo-600 w-full p-3 hover:bg-indigo-800 cursor-pointer transition-all rounded-md'
            value= {paciente.id ?  "editar paciente"  : "agregar paciente"   }
          />

      </form>
    </div>
  )
}

export default Formulario;