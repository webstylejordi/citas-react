import React from 'react'
import Paciente from './paciente';

const ListadoPacientes = ({pacientes}) => {



  return (
       <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

            {pacientes && pacientes.length ?(
                 <>
                    <h2 className='font-black text-3xl text-center'>
                          Listado Pacientes
                    </h2>
                    <p className='font-bold text-center mb-5 mt-3 text-xl'>
                         administra tus {''} 
                    <span className='text-indigo-600'>pacientes y citas</span>    
               </p>


               { pacientes.map ( paciente => (
                    <Paciente
                    key = {paciente.id}
                    paciente = {paciente}
                    />
               ))}

                 
                 
                 </>
               


            ) : (
               <>
                    <h2 className='font-black text-3xl text-center'>
                         No hay pacientes
                    </h2>
                    <p className='font-bold text-center mb-5 mt-3 text-xl'>
                         comienza agregando pacientes {''} 
                         <span className='text-indigo-600'>aparecereran en este listado</span>    
                    </p>     
               </>
    
            ) 
            };



  


            


       </div>

  )
}

export default ListadoPacientes;