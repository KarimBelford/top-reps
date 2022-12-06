import React, { useContext } from "react";
 import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
 import { CartContext } from "../../contexts/CartContext";
import './CartIcon.scss'


const CartIcon = () => {
    const {setCurrentDropdown,currentDropdown,cartCount} =  useContext(CartContext)
    const toggleCart = () => setCurrentDropdown(!currentDropdown);
    
    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' onClick={toggleCart}/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon;