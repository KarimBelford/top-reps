import React, {useContext } from "react";
import {useSelector, useDispatch} from 'react-redux'
import { addItemToCart,removeItemFromCart, clearItem} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import { 
    CheckoutItemContainer,
    ImageContainer, 
    Quantity, 
    ValueContainer, 
    Arrow, 
    Price, 
    RemoveButton, 
    Name
} from "./CheckoutItemStyles";

const CheckoutItem = ({cartItem}) => {

    const dispatch = useDispatch()
    const {name, imageUrl, price, quantity } = cartItem;
    const cartItems = useSelector(selectCartItems);



    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems,cartItem));
    const addItemHnadler = () => dispatch(addItemToCart(cartItems,cartItem));
    const clearItemHandler = () => dispatch(clearItem(cartItems,cartItem));

    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt = {`${name}`}/>
            </ImageContainer>
            <Name className='name'>{name}</Name>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                    <ValueContainer>{quantity} </ValueContainer>
                <Arrow onClick={addItemHnadler}>&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
        
    )
    

}

export default CheckoutItem;