//Sumar todos los precios de un arreglo de objetos que tiene la key 'price'
export const totalPrice = (list) => {
  const totalPrice = list.reduce((total, product) => {
    return total + product.price
  }, 0)

  return totalPrice
}
