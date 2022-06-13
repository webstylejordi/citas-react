import React from 'react'

const Error = ({children}) => {
  return (
     <div className='bg-red-800  text-white text-center p-3 uppercase font-bold m-3 rounded-md'>
     <p>{children}</p>
     </div>
  )
}

export default Error