import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'

import { XMarkIcon } from '@heroicons/react/24/solid'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${
        !context.isProductDetailOpen ? `hidden` : ``
      } flex flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)]`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Details</h2>
        <div
          className='cursor-pointer'
          onClick={() => {
            context.closeProductDetail()
          }}
        >
          <XMarkIcon className='h-6 w-6 text-black' />
        </div>
      </div>
    </aside>
  )
}

export default ProductDetail
