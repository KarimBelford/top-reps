import React, {useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

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
   const {name, imageUrl, price, quantity } = cartItem;
   const {addItemToCart,removeItemFromCart,clearItem} = useContext(CartContext)

   const removeItemHandler = () => removeItemFromCart(cartItem);
   const addItemHnadler = () => addItemToCart(cartItem);
   const clearItemHandler = () => clearItem(cartItem)

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