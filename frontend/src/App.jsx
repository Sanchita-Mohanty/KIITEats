import React, { useState } from 'react'
import Navebar from './components/Navebar/Navebar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
const App = () => {
  const[showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <> </>}
    <div className='app'>
      <Navebar setShowLogin={setShowLogin}/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} /> {/* Ensure this path matches */}
       </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App