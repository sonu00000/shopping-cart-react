import { useState } from "react"
import Products from "./Products"
import CartSummary from "./CartSummary"
import Cart from "./Cart"

export default function ShoppingCartApp({ productsData, threshold, freeGift }) {
  const [productsList, setProductsList] = useState(productsData)
  const [cartList, setCartList] = useState([])
  const [total, setTotal] = useState(0)

  return (
    <div className="app-container">
      <h1>Shopping Cart</h1>
      <h2>Products</h2>
      <Products
        productsList={productsList}
        cartList={cartList}
        setCartList={setCartList}
        total={total}
        setTotal={setTotal}
      />
      <h2>Cart Summary</h2>
      <CartSummary
        cartList={cartList}
        total={total}
        threshold={threshold}
        freeGift={freeGift}
      />
      <h2>Cart Items</h2>
      <Cart
        cartList={cartList}
        setCartList={setCartList}
        total={total}
        threshold={threshold}
        freeGift={freeGift}
      />
    </div>
  )
}
