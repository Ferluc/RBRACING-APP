import { useState } from "react";
import './Navbar.css'

const Navbar = ({menuItems}) =>{
   

    

    return(<>
    <nav >
        
           <div className="navbar">
        <ul id="menuItems">
            <li><a href="index.html">Verstappen</a></li>
            <li><a href="index.html">Checo</a></li>
            <li><a href="index.html">Fanwear</a></li>
            <li><a href="index.html">Headwear</a></li>
            <li><a href="index.html">Purchase</a></li>
        </ul>
        </div> 
        
    </nav>
    <h1>Red Bull Racing</h1>
    </>);

} 
export default Navbar;