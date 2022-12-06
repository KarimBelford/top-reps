import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Button from "../button/Button";
import CartItem from "../cartItem/CartItem";
import './CartDropdown.scss'

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key= {item.id} cartItem ={item}/>)}
            </div>
            <Button>Checkout</Button>
        </div>
    )
}

export default CartDropdown;
