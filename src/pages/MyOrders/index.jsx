import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../../context'

import Layout from '@/components/Layout'
import OrdersCard from '../../components/OrdersCard'

function MyOrders() {
  const context = useContext(ShoppingCartContext)
  return (
    <Layout>
      <div className='flex items-center justify-center relative mb-4'>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>
      <div className='flex flex-col'>
        {context.order?.map((order, index) => {
          return (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                key={index}
                date={order.date}
                totalPrice={order.totalPrice}
                totalProducts={order.cantProducts}
              />
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default MyOrders
