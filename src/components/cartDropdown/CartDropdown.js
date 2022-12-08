import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import CartItem from "../cartItem/CartItem";
import './CartDropdown.scss'

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key= {item.id} cartItem ={item}/>)}
            </div>
            <Link to='/checkout'>
                <Button>
                    Checkout
                </Button>
            </Link>
            
        </div>
    )
}

export default CartDropdown;
