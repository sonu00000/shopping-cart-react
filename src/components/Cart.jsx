import EmptyCart from "./EmptyCart"

export default function Cart({
  cartList,
  setCartList,
  total,
  threshold,
  freeGift,
}) {
  // handle increase or decrease cart item quantity depending on parameter +1 or -1 and filter if quantity reaches 0 for a particular cart item
  function handleCartItemQuantity(cartItemId, count) {
    const cartListCopy = [...cartList]
    const modifiedCart = cartListCopy
      .map((cartItem) => {
        if (cartItem.id === cartItemId) {
          return { ...cartItem, quantity: cartItem.quantity + count }
        }
        return cartItem
      })
      .filter((cartItem) => cartItem.quantity !== 0)
    setCartList(modifiedCart)
  }

  return (
    <>
      <ul className="cart-list">
        {cartList.map((eachCartItem) => (
          <li className="cart-item" key={eachCartItem.id}>
            <div className="cart-item-details">
              <p className="title">{eachCartItem.name}</p>
              <p className="sub-title">
                &#8377; {eachCartItem.price} x {eachCartItem.quantity} = &#8377;
                {eachCartItem.price * eachCartItem.quantity}
              </p>
            </div>
            <div className="btn-controls">
              <button
                onClick={() => handleCartItemQuantity(eachCartItem.id, -1)}
              >
                -
              </button>
              <p>{eachCartItem.quantity}</p>
              <button
                onClick={() => handleCartItemQuantity(eachCartItem.id, +1)}
              >
                +
              </button>
            </div>
          </li>
        ))}
        {total >= threshold && (
          <li className="cart-item">
            <div className="cart-item-details">
              <p className="title">{freeGift.name}</p>
              <p className="sub-title">&#8377; 0 x 1 = &#8377;0</p>
            </div>
            <p className="free-gift">FREE GIFT</p>
          </li>
        )}
      </ul>
      {cartList.length === 0 && <EmptyCart />}
    </>
  )
}
