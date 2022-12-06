import React from "react";
import Button from "../button/Button";
import './CartDropdown.scss'

const CartDropdown = () => {
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'/>
            <Button>Checkout</Button>
        </div>
    )
}

export default CartDropdown;
