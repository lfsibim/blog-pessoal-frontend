import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className='container flex justify-between text-lg'>
            <div className='text-2xl font-bold uppercase'>Blog Pessoal</div>
            <div className='flex gap-4'>
              <div className='hover:text-gray-400 font-bold'>Postagens</div>
              <div className='hover:text-gray-400 font-bold'>Temas</div>
              <div className='hover:text-gray-400 font-bold'>Cadastrar tema</div>
              <div className='hover:text-gray-400 font-bold'>Perfil</div>
              <div className='hover:text-gray-400 font-bold'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar