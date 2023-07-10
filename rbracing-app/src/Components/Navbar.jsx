import { useState } from "react";
import './Navbar.css'
import logo from '../Logo/RBlogo.png';
import cart from '../Logo/Cart.png';
const Navbar = ({menuItems}) =>{
   

    

    return(<>
    <nav >
        
           <div className="navbar">
           <img src={logo} className='navbar-logo' />
        <ul id="menuItems">
            <li><a href="index.html">Verstappen</a></li>
            <li><a href="index.html">Checo</a></li>
            <li><a href="index.html">Fanwear</a></li>
            <li><a href="index.html">Headwear</a></li>
            <li><a href="index.html">Purchase</a></li>
            <img src={cart} className='navbar-logo' />
        </ul>
        </div> 
        
    </nav>
    <h1>Red Bull Racing</h1>
    </>);

} 
export default Navbar;