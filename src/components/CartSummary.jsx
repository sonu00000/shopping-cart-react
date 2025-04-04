import ProgressBar from "./ProgressBar"

export default function CartSummary({ cartList, total, threshold, freeGift }) {
  return (
    <div className="cart-summary-container">
      <div className="cart-summary-details">
        <p className="title">SubTotal:</p>
        <p className="cart-total">&#8377;{total}</p>
      </div>
      <hr className="line" />
      {total < threshold && (
        <ProgressBar threshold={threshold} freeGift={freeGift} total={total} />
      )}
      {total >= threshold && (
        <p className="title">You got a free {freeGift.name}!</p>
      )}
    </div>
  )
}
