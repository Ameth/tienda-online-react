import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { ShoppingCartContext } from '../../context'
import Layout from '@/components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'

function Home() {
  const context = useContext(ShoppingCartContext)

  const params = useParams()
  const { category } = params

  const renderView = () => {
    // const itemToRender = context.searchByTitle?.length > 0 ? context.filteredItems : context.items
    const itemToRender = context.filteredItems
    
    // console.log(itemToRender)

    if (itemToRender?.length > 0) {
      return itemToRender?.map((item) => <Card key={item.id} data={item} />)
    } else {
      return <p>No results found</p>
    }
  }

  useEffect(() => {
    context.setSearchByCategory(category)
    // console.log(context.searchByCategory)
    return () => {
      context.setSearchByTitle(null)
    }
  }, [category])

  return (
    <div className=''>
      <Layout>
        <div className='flex items-center justify-center relative mb-4'>
          <h1 className='font-medium text-xl'>Exclusive Products</h1>
        </div>
        <input
          type='text'
          placeholder='Search a product...'
          className='rounded-lg border border-black p-4 w-80 mb-4 focus:outline-none'
          onChange={(event) => {
            context.setSearchByTitle(event.target.value)
          }}
        />
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {renderView()}
        </div>
        <ProductDetail />
      </Layout>
    </div>
  )
}

export default Home
