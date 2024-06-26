import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import { PlusIcon } from '@heroicons/react/24/solid'
import { CheckIcon } from '@heroicons/react/24/solid'

const Card = ({ data }) => {
  const context = useContext(ShoppingCartContext)

  // console.log("Data",data);

  const showProduct = (productData) => {
    context.closeCheckoutSideMenu()
    context.openProductDetail()
    context.setProductDetail(productData)
    // console.log("ShowProduct",productData);
  }

  const addToCart = (event, productData) => {
    event.stopPropagation()
    context.setCartProducts([...context.cartProducts, productData])
    // context.setCount(context.count + 1)
    context.closeProductDetail()
    context.openCheckoutSideMenu()
    // console.log('Cart', context.cartProducts)
  }

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0

    if (isInCart) {
      return (
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-green-300 w-6 h-6 rounded-full m-2 p-1'
          onClick={(event) => event.stopPropagation()}
        >
          <CheckIcon className='h-6 w-6 text-black' />
        </div>
      )
    } else {
      return (
        <div
          className='absolute top-0 right-0 flex justify-center items-center bg-blue-200 w-6 h-6 rounded-full m-2 p-1'
          onClick={(event) => addToCart(event, data)}
        >
          <PlusIcon className='h-6 w-6 text-black' />
        </div>
      )
    }
  }

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => {
        showProduct(data)
      }}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {data.category}
        </span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={data.image}
          alt='headphone'
        />
        {renderIcon(data.id)}
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light truncate'>{data.title}</span>
        <span className='text-lg font-semibold'>${data.price}</span>
      </p>
    </div>
  )
}

export default Card
