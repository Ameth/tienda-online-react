import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  // Carrito de compras - Cantidad
  const [count, setCount] = useState(0)

  //   console.log('COUNT:', count);

  // Abrir y cerrar Detalle del producto
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  //Detalle de producto - Mostrar información
  const [productDetail, setProductDetail] = useState({})

  //Productos que tiene el carrito
  const [cartProducts, setCartProducts] = useState([])

  // Abrir y cerrar Detalle del checkout
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  //Lista de ordenes compradas por el usuario
  const [order, setOrder] = useState([])

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productDetail,
        setProductDetail,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
