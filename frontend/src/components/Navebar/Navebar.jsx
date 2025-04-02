import React, { useState, useContext } from 'react';
import './Navebar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext'; // Import StoreContext

const Navebar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const { cartItems } = useContext(StoreContext); // Access cartItems from context

  // Calculate total number of items in the cart
  const totalItems = Object.values(cartItems).reduce((sum, count) => sum + count, 0);

  return (
    <div className='navebar'>
      <Link to="/"><img src={assets.logo} className='logo' /></Link>
      <ul className='navebar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
      </ul>
      <div className='navebar-right'>
        <img src={assets.search_icon} />
        <div className='navebar-search-icon'>
          <Link to='/cart'>
            <img src={assets.basket_icon} />
            {totalItems > 0 && <div className="cart-count">{totalItems}</div>} {/* Display total items */}
          </Link>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navebar;