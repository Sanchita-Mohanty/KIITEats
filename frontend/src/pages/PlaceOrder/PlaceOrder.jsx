import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount} =useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Order Information</p>
        <div className="multi-fields">
          <div>
            <input type="text" placeholder='First Name'/>
          </div>
          <div>
            <input type="text" placeholder='Last Name'/>
          </div>
          <div>
            <input type="text" placeholder='Roll Number'/>
          </div>
        </div>
      </div>
      <div className="place-order-right">
        <div className="cart-total small-box">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Token Fee</p>
              <p>₹{getTotalCartAmount()===0?0:1}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+1}</b>
            </div>
          </div>
          <button>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder