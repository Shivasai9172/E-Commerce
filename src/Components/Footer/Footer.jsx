import React from 'react'
import './Footer.css'
import footer_logo from'../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintrests_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Comapny</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Conatct</li>
        </ul>
        <div className="footer-social-icons">
            <div className="fooetr-icons-conatiner">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="fooetr-icons-conatiner">
                <img src={pintrests_icon} alt="" />
            </div>
            <div className="fooetr-icons-conatiner">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>&copy; Rights @2024</p>
        </div>
    </div>
  )
}
