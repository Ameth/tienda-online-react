import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShoppingCartContext } from '../../context'

import Layout from '@/components/Layout'
import OrderCard from '../../components/OrderCard'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  context.closeCheckoutSideMenu()
  // console.log('Orders', context.order)

  const params = useParams()
  // console.log(Number(params.id))
  const id = !isNaN(Number(params.id))
    ? Number(params.id)
    : params.id == 'last'
    ? context.order.length - 1
    : undefined

  return (
    <Layout>
     <div className='flex items-center justify-center relative mb-4'>
        <h1 className='font-medium text-xl'>My Order</h1>
      </div>
      <div className='flex flex-col'>
        {context.order?.[id].products?.map((product) => {
          return (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export default MyOrder
