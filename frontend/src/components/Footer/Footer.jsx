import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
           <img src={assets.logo}/>
           <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ea laudantium, dolorum doloremque in architecto repellendus debitis ullam omnis repudiandae. Nam ex beatae aliquid voluptatem enim nobis cupiditate debitis dicta?</p>
           <div className="footer-social-icon">
                <img src={assets.facebook_icon}/>
                <img src={assets.linkedin_icon}/>
                <img src={assets.twitter_icon}/>
           </div>
        </div>
        <div className="footer-content-center">
           <h2>COMPANY</h2>
           <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Token</li>
            <li>Privacy policy</li>
           </ul>
        </div>
        <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>+91-6372470276</li>
                <li>contact@kiiteats.com</li>
             </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2025 © KiitEats.com-All Right Reserved</p>
    </div>
  )
}

export default Footer