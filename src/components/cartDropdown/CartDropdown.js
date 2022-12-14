import React from "react";
import {useSelector} from 'react-redux'
import { selectCartItems } from "../../store/cart/cart.selector";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import CartItem from "../cartItem/CartItem";
import { CartDropdownContainer, CartItemsContainer, EmptyMessage } from "./CartDropdownStyles";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    return(
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? (cartItems.map((item) => 
                    <CartItem key= {item.id} cartItem ={item}/>
                    )) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItemsContainer>
            <Link to='/checkout'>
                <Button>
                    Checkout
                </Button>
            </Link>
            
        </CartDropdownContainer>
    )
}

export default CartDropdown;
