import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'

import { TrashIcon } from '@heroicons/react/24/solid'

// const deleteProduct = (id) => {

// }

const OrderCard = (props) => {
  const { id, title, image, price, handleDeleteProduct } = props
  return (
    <div className='flex justify-between items-center mb-4 bg-blue-100/20 rounded-lg p-3 gap-3'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={image}
            alt={title}
          />
        </figure>
        <p className='text-sm font-light text-ellipsis'>{title}</p>
      </div>
      <div className='flex flex-col items-end gap-2'>
        {/* <button className='font-medium text-gray-500 rounded-sm' type='button'>Remove</button> */}
        <TrashIcon
          className={`${
            !handleDeleteProduct ? 'hidden' : ''
          } h-5 w-5 text-red-500 cursor-pointer`}
          title='Delete product'
          onClick={() => handleDeleteProduct(id)}
        />
        <p className='text-lg font-bold text-green-500'>${price}</p>
      </div>
    </div>
  )
}

export default OrderCard
