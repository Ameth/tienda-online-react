import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import OrderCard from '../OrderCard'

import { XMarkIcon } from '@heroicons/react/24/solid'

import { totalPrice } from '../../utils'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  // console.log("Detail",context.productDetail);

  const handleDeleteProduct = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    )
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    if (context.cartProducts.length > 0) {
      const date = new Date()

      const orderToAdd = {
        date: date.toLocaleDateString(),
        products: context.cartProducts,
        cantProducts: context.cartProducts.length,
        totalPrice: totalPrice(context.cartProducts),
      }

      context.setOrder([...context.order, orderToAdd])
      context.setCartProducts([])
    }

    // console.log('Orders', context.order)
  }

  return (
    <aside
      className={`${
        !context.isCheckoutSideMenuOpen ? `hidden` : ``
      } flex flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-80px)] top-20`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div
          className='cursor-pointer'
          onClick={() => {
            context.closeCheckoutSideMenu()
          }}
        >
          <XMarkIcon className='h-6 w-6 text-black' />
        </div>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
        {context.cartProducts.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              handleDeleteProduct={handleDeleteProduct}
            />
          )
        })}
      </div>
      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light text-3xl'>Total:</span>
          <span className='font-medium text-3xl text-blue-700'>
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to='/my-orders/last'>
          <button
            className={`${
              context.cartProducts.length === 0
                ? 'bg-opacity-50 cursor-not-allowed'
                : ''
            } w-full bg-red-500 text-white py-3 rounded-lg text-2xl`}
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu
