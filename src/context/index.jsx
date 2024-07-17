import { createContext, useState, useEffect } from 'react'

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

  //Obtener productos desde la API
  const URL_API = 'https://fakestoreapi.com/products'
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  useEffect(() => {
    fetch(URL_API)
      .then((response) => response.json())
      .then((data) => setItems(data))
  }, [])

  //Buscar productos por titulo
  const [searchByTitle, setSearchByTitle] = useState(null)

  //Buscar productos por categoria
  const [searchByCategory, setSearchByCategory] = useState(null)
  // console.log(searchByCategory);

  const filterItemsByTitle = (
    items,
    searchByTitle,
    searchByCategory = null
  ) => {
    // return items
    //   ?.filter((item) =>
    //     item.title?.toLowerCase().includes(searchByTitle?.toLowerCase())
    //   )
    //   ?.filter((item) =>
    //     item.category?.toLowerCase().includes(searchByCategory?.toLowerCase())
    //   )

    // console.log(items, searchByTitle, searchByCategory)

    return items?.filter(
      (item) =>
        (searchByTitle === null ||
          item.title.toLowerCase().includes(searchByTitle.toLowerCase())) &&
        (searchByCategory === null ||
          item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    )
  }

  useEffect(() => {
    // if (searchByTitle || searchByCategory)
    setFilteredItems(filterItemsByTitle(items, searchByTitle, searchByCategory))
    // return () => {
    //   setSearchByTitle(null)
    // }
  }, [items, searchByTitle, searchByCategory])

  console.log('Filtered', filteredItems)

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
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        searchByCategory,
        setSearchByCategory,
        filteredItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
