import React from "react";
import cart from '../Logo/Cart.png'

import './Styles/CartWidget.css'



const CartWidget = () => {

    return (
        <div className="cart-widget">
                {/* <img width="30" height="30" src="https://img.icons8.com/pastel-glyph/64/shopping-trolley--v2.png" alt="shopping-trolley--v2"/> */}
                <img src={cart} className='navbar-logo' />
                <div className="qty-display">5</div>
                
            
        </div>
    );
};

export default CartWidget;