import { NavLink } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'text-gray-900 font-medium underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink to='/'>Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/category/electronics'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            Electronicos
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/category/clothing'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            Ropa
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/category/accesorios'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            Accesorios
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/category/juguetes'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            Juguetes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/category/otros'
            className={({ isActive }) => (isActive ? activeStyle : '')}
          >
            Otros
          </NavLink>
        </li>
      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>ameth@ameth.dev</li>
        <li>
          <NavLink to='/my-orders'>Mis ordenes</NavLink>
        </li>
        <li>
          <NavLink to='/my-account'>Mi cuenta</NavLink>
        </li>
        <li>
          <NavLink to='/sign-in'>Iniciar sesión</NavLink>
        </li>
        <li className='flex items-center'>
          <ShoppingCartIcon className='h-6 w-6 text-black' />
          <div>{context.cartProducts.length}</div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
