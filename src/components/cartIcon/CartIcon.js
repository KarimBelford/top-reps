import React, { useContext } from "react";
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { CartContext } from "../../contexts/CartContext";
import { CartIconContainer, ShoppingIconContainer, ItemCount } from "./CartIconStyles.jsx";


const CartIcon = () => {
    const {setCurrentDropdown,currentDropdown,cartCount} =  useContext(CartContext)
    const toggleCart = () => setCurrentDropdown(!currentDropdown);
    
    return (
        <CartIconContainer onClick={toggleCart}>
            <ShoppingIconContainer>
                <ShoppingIcon className='shopping-icon'/>
            </ShoppingIconContainer>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;