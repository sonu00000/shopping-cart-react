import { useEffect } from "react"

export default function Products({
  productsList,
  cartList,
  setCartList,
  total,
  setTotal,
}) {
  function addToCart(selectedProduct) {
    const isProductExistsInCart = cartList.find(
      (cartItem) => cartItem.id === selectedProduct.id
    )
    console.log(isProductExistsInCart)
    if (!isProductExistsInCart) {
      setCartList((prevCart) => [
        ...prevCart,
        { ...selectedProduct, quantity: 1 },
      ])
    } else {
      setCartList((prevCart) =>
        prevCart.map((cartItem) => {
          if (cartItem.id === selectedProduct.id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 }
          } else {
            return cartItem
          }
        })
      )
    }
  }

  useEffect(() => {
    if (cartList.length === 0) {
      setTotal(0)
      return
    }
    if (cartList.length !== 0) {
      const currentTotal = cartList.reduce(
        (currTotal, currItem) => currTotal + currItem.price * currItem.quantity,
        0
      )
      setTotal(currentTotal)
    }
  }, [cartList])

  console.log("cart list", cartList)
  console.log("total", total)

  return (
    <ul className="products-list">
      {productsList.map((eachProd) => (
        <li className="product-item" key={eachProd.id}>
          <p className="title">{eachProd.name}</p>
          <p className="sub-title">&#8377; {eachProd.price}</p>
          <button className="add-btn" onClick={() => addToCart(eachProd)}>
            Add to Cart
          </button>
        </li>
      ))}
    </ul>
  )
}
