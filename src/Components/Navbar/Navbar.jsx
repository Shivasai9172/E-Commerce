import React, { useContext, useState } from 'react'
import { VscAccount } from "react-icons/vsc";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
const Navbar = () => {
    const [menu,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <div className='hamburgerMenu'>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><NavLink style={{textDecoration: 'none' , color:'black'}} to='/'>Shop</NavLink>  {menu=="shop"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("mens")}}><NavLink style={{textDecoration: 'none' , color:'black'}} to='/mens'>Men</NavLink> {menu=="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><NavLink style={{textDecoration: 'none' , color:'black'}} to='/womens'>Women</NavLink> {menu=="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><NavLink style={{textDecoration: 'none' , color:'black'}} to='/kids'>Kid</NavLink> {menu=="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()} </div>
        </div>
    </div>
  )
}

export default Navbar