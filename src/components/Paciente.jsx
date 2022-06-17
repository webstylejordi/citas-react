import { useEffect } from "react"
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {


 
   const {nombre, propietario, email, fecha , sintomas, id} = paciente

   const handleEliminar = () => {
     const respuesta = confirm("realmene deseas eliminar este pacient4v ?")
          if (respuesta) {
               eliminarPaciente(id)
          }  
     }

  return (

   
       <div className= 'mx-5 my-10 shadow-md bg-blue-100 px-5 py-10 rounded-xl'>
            
          <p className='text-grey-700 font-bold uppercase mb-3'>Nombre: 
               <span className='normal-case font-normal'>{ nombre}</span>
          </p>

          <p className='text-grey-700 font-bold uppercase mb-3'>Propietario: 
               <span className='normal-case font-normal'>{ propietario}</span>
          </p>

          <p className='text-grey-700 font-bold uppercase mb-3'>Email : 
               <span className='normal-case font-normal'>{ email}</span>
          </p>

          <p className='text-grey-700 font-bold uppercase mb-3'>Fecha de Alta : 
               <span className='normal-case font-normal'>{ fecha}</span>
          </p>

          <p className='text-grey-700 font-bold uppercase mb-3'>Síntomas :
          <span className='normal-case font-normal'> { sintomas}</span>
          </p>
          <div className="flex justify-between">
               <button
               className="bg-indigo-600 px-4 py-2 font-bold rounded-lg text-white uppercase hover:bg-indigo-800 cursor-pointer"
               onClick = {() => setPaciente(paciente)}
               >Editar</button>

          <button
               className="bg-red-600 px-4 py-2 font-bold rounded-lg text-white uppercase hover:bg-red-800 cursor-pointer"
               onClick = {handleEliminar}
               >Eliminiar</button>
          </div>
    </div>
     
  )
}

export default Paciente