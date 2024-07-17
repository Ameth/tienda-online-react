import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'

import { CalendarIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

// const deleteProduct = (id) => {

// }

const OrdersCard = (props) => {
  const { date, totalPrice, totalProducts } = props
  return (
    <div className='flex justify-between items-center mb-3 border border-black p-4 rounded-lg w-80'>
      <div className='flex justify-between w-full'>
        <p className='flex flex-col'>
          <span className='flex'>
            <CalendarIcon className='h-5 w-5 mr-1' />
            {date}
          </span>
          <span className='flex'>
            <ShoppingBagIcon className='h-5 w-5 mr-1' />
            {totalProducts} articles
          </span>
        </p>
        <p className='flex justify-between items-center'>
          <span className='font-medium text-2xl text-blue-700 align-middle'>
            ${totalPrice}
          </span>
          <ChevronRightIcon className='h-6 w-6 text-black' />
        </p>
      </div>
    </div>
  )
}

export default OrdersCard
