import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex similique corrupti facere, fugiat explicabo soluta quibusdam. Rem consectetur suscipit esse consequatur. Doloribus totam itaque minima ut, atque hic iure fugiat?</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-Right'>
                <h2>GET IN TOUCH</h2> 
                <ul>
                <li>+91 639-280-6345</li>
                <li>abhisharma@1gmail.com</li>
                 </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 &copy; Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer