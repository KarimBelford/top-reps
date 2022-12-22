import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { setDropdown } from "../../store/cart/cart.action";
import { selectCartCount, selectCartDropdown } from "../../store/cart/cart.selector";
import { CartIconContainer, ShoppingIconContainer, ItemCount } from "./CartIconStyles.jsx";


const CartIcon = () => {
    const dispatch = useDispatch();
    const cartDropdown = useSelector(selectCartDropdown);
    const cartCount = useSelector(selectCartCount);
    
    const toggleCart = () => dispatch(setDropdown(!cartDropdown));
    
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