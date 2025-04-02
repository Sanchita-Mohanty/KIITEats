import React, { useContext, useState } from 'react'
import'./Cart.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext); // Fixed useContext
  const [selectedCanteen, setSelectedCanteen] = useState(""); // State to track selected canteen
  const navigate=useNavigate();

  const handleCanteenChange = (event) => {
    setSelectedCanteen(event.target.value);
  };

  return (
    <div className='cart'>
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr/>
        {food_list.map((item,index)=>{
              if(cartItems[item._id]>0){
                return(
                  <div> 
                     <div key={item._id} className="cart-item-title cart-items-item"> {/* Added key */}
                     <img src={item.image}/>
                     <p>{item.name}</p>
                     <p>₹{item.price}</p>
                     <p>{cartItems[item._id]}</p>
                     <p>₹{item.price * cartItems[item._id]}</p>
                     <p onClick={()=>removeFromCart(item._id) } className='cross'>x</p>
                  </div>
                  <hr/>
                  </div>
                 
                )
              }
              return null; // Handle cases where cartItems[item._id] <= 0
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
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
          <button 
            onClick={() => navigate('/order')} 
            disabled={!selectedCanteen} // Ensure this condition is met
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="campus-name">
          <p>Select The Canteen</p>
          <select value={selectedCanteen} onChange={handleCanteenChange}>
            <option value="" disabled hidden>Choose the canteen</option> {/* Updated default option */}
            <option value="Central Perk">Central Perk</option>
            <option value="Dhabha">Dhabha</option>
            <option value="The Hunger Cycle">The Hunger Cycle</option>
            <option value="Hazelnut">Hazelnut</option>
            <option value="Food Junction">Food Junction</option>
            <option value="Fuel Zone">Fuel Zone</option>
            <option value="Nescafé">Nescafé</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Cart