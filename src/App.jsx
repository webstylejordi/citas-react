import { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mx-auto mt-20'>
      <Header />
      <div className='md:flex mt-12'>
        <Formulario />
        <ListadoPacientes />
      </div>

    </div>
  )
}

export default App