import React from 'react'

const Formulario = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>
          Seguimiento Pacientes
      </h2>
      <p className='text-lg  mt-3 text-center font-bold mb-5'>
           Añade pacientes y {''}
           <span className='text-indigo-600 font-bold'>administralos</span>
      </p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
        <div className='mb-5'>
            <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre de la mascota</label>
            <input 
            id="mascota"
            type="text"
            placeholder='nombre mascota'
            className='border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md'
            />
        </div>

        <div className='mb-5'>
            <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre Propietario</label>
            <input 
            id="propietario"
            type="text"
            placeholder='nombre del propietario'
            className='border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md'
            />
        </div>

        <div className='mb-5'>
            <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
            <input 
            id="email"
            type="email"
            placeholder='email de contacto'
            className='border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md'
            />
        </div>

        <div className='mb-5'>
            <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Fecha Alta</label>
            <input 
            id="alta"
            type="date"
            />
        </div>

        <div className='mb-5'>
            <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
            <textarea
            id="sintomas"
            placeholder='describe los sintomas'
            className='border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md'
            />
        </div>

        <input 
          type="submit"
          className='text-white uppercase font-bold bg-indigo-600 w-full p-3 hover:bg-indigo-800 cursor-pointer transition-all rounded-md'
          value="agregar paciente"
        />

      </form>
    </div>
  )
}

export default Formulario;