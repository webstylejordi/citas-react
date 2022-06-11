import React from 'react'
import Paciente from './paciente';

const ListadoPacientes = () => {
  return (
       <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
           <h2 className='font-black text-3xl text-center'>
                Listado Pacientes
            </h2>
               <p className='font-bold text-center mb-5 mt-3 text-xl'>
                    administra tus {''} 
                    <span className='text-indigo-600'>pacientes y citas</span>    
               </p>

              <Paciente />

              <Paciente />

              <Paciente />

       </div>

  )
}

export default ListadoPacientes;