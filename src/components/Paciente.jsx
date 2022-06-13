
const Paciente = ({paciente}) => {

  console.log(paciente)

  return (
   
       <div className= 'mx-5 my-10 shadow-md bg-white px-5 py-10 rounded-xl'>
          <p className='text-grey-700 font-bold uppercase mb-3'>Nombre: 
               <span className='normal-case font-normal'>{paciente.nombre}</span>
          </p>

          <p className='text-grey-700 font-bold uppercase mb-3'>Propietario: 
               <span className='normal-case font-normal'>{paciente.propietario}</span>
          </p>

          <p className='text-grey-700 font-bold uppercase mb-3'>Email : 
               <span className='normal-case font-normal'>{paciente.email}</span>
          </p>

          <p className='text-grey-700 font-bold uppercase mb-3'>Fecha de Alta : 
               <span className='normal-case font-normal'>{paciente.fecha}</span>
          </p>

          <p className='text-grey-700 font-bold uppercase mb-3'>Síntomas :
          <span className='normal-case font-normal'> {paciente.sintomas}</span>
          </p>

    </div>
  )
}

export default Paciente
