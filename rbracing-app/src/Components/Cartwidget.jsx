import React from "react";
import cart from '../Logo/Cart.png'

import './Styles/CartWidget.css'



const CartWidget = () => {

    return (
        <div className="cart-widget">
                
                <img src={cart} className='navbar-logo' />
                <div className="qty-display">5</div>
                
            
        </div>
    );
};

export default CartWidget;