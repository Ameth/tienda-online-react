import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import Card from '../../components/Card'
import ProductDetail from '../../components/ProductDetail'

function Home() {
  const URL_API= 'https://fakestoreapi.com/products'
  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch(URL_API)
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  return (
    <div className=''>
      <Layout>
        Home
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map((item) => (
            <Card key={item.id} data={item} />
          ))
        }
        </div>
        <ProductDetail />
      </Layout>
    </div>
  )
}

export default Home
