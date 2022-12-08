import React, {useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import './CheckoutItem.scss'

const CheckoutItem = ({cartItem}) => {
   const {name, imageUrl, price, quantity } = cartItem;
   const {addItemToCart,removeItemFromCart,clearItem} = useContext(CartContext)

   const removeItemHandler = () => removeItemFromCart(cartItem);
   const addItemHnadler = () => addItemToCart(cartItem);
   const clearItemHandler = () => clearItem(cartItem)

   return(
    <div className='checkout-item-container'>
        <div className='image-container'>
            <img src={imageUrl} alt = {`${name}`}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity} </span>
            <div className='arrow' onClick={addItemHnadler}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
    </div>
    
   )
    

}

export default CheckoutItem;