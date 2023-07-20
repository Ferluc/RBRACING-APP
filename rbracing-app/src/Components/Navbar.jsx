
import logo from '../Logo/RBlogo.png';
import CartWidget from "./Cartwidget";

import './Styles/Navbar.css'

const Navbar = () =>{
    

    return(<>
    <nav >
        
           <div className="navbar">
                <img src={logo} className='navbar-logo' />
                
                <ul id="menuItems">
                    <li><a href="index.html">Verstappen</a></li>
                    <li><a href="index.html">Checo</a></li>
                    <li><a href="index.html">Fanwear</a></li>
                    <li><a href="index.html">Headwear</a></li>
                    <li><a href="index.html">Formulario</a></li>
                                        
                </ul>
                <CartWidget/>
            </div> 
        
    </nav>
   
    </>);

} 
export default Navbar;