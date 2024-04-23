import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'

import { XMarkIcon } from '@heroicons/react/24/solid'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  // console.log("Detail",context.productDetail);

  return (
    <aside
      className={`${
        !context.isProductDetailOpen ? `hidden` : ``
      } flex flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)] top-20 
      overscroll-auto`}
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
      <figure className='px-6'>
        <img
          className='w-full h-full rounded-lg'
          src={context.productDetail.image}
          alt={context.productDetail.title}
        />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>
          ${context.productDetail.price}
        </span>
        <span className='font-medium text-md'>
          {context.productDetail.title}
        </span>
        <span className='font-light text-sm'>
          {context.productDetail.description}
        </span>
      </p>
    </aside>
  )
}

export default ProductDetail
