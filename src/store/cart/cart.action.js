import { createAction } from "../../utils/reducer/reducer.utils";
import CART_ACTION_TYPES from "./cart.type";

export const setDropdown = (bool) => createAction(CART_ACTION_TYPES.SET_CURRENT_DROPDOWN, bool);

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)

}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeItem(cartItems,cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)

}

export const clearItem =(cartItems, cartItemToRemove) => {
    const newCartItems = clearItemFromCart(cartItems,cartItemToRemove)
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,newCartItems)

}

const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if(existingCartItem){
        return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
            ?{...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        );
    }
    
    return [...cartItems, {...productToAdd, quantity: 1}]
    
};

const removeItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    
    return cartItems.map((cartItem) =>
        cartItem.id === cartItemToRemove.id
            ?{...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        );
    

}

const clearItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

    if(existingCartItem){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }


}