import React, { createContext, useReducer} from "react";
import { createAction } from "../utils/reducer/reducer.utils";


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



export const CartContext  = createContext({
    currentDropdown : false,
    setCurrentDropdown : () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
})

export const CART_ACTION_TYPES = {
    SET_CURRENT_DROPDOWN: 'SET_CURRENT_DROPDOWN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
   
};

const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type){
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return{
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_CURRENT_DROPDOWN:
            return {
                ...state,
                currentDropdown: payload
            }
        default:
            throw new Error(`unhandled type of ${type} in cartReducer`)
    }
}

const INITIAL_STATE = {
    currentDropdown: false,
    cartItems:[],
    cartCount: 0,
    cartTotal: 0
}



export const CartProvider = ({children}) => {

    const [{currentDropdown, cartItems,cartCount,cartTotal}, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );

        const newCartTotal = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );
        
        dispatch (createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{
            cartItems: newCartItems, 
            cartTotal:newCartTotal, 
            cartCount: newCartCount 
        }))       
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems,productToAdd);
        updateCartItemsReducer(newCartItems)  
    }

    const removeItemFromCart = (cartItemToRemove) => {
        const newCartItems = removeItem(cartItems,cartItemToRemove);
        updateCartItemsReducer(newCartItems)
    }

    const clearItem =(cartItemToRemove) => {
        const newCartItems = clearItemFromCart(cartItems,cartItemToRemove)
        updateCartItemsReducer(newCartItems)
    }


    const setCurrentDropdown = (bool) =>{
        dispatch(createAction(CART_ACTION_TYPES.SET_CURRENT_DROPDOWN, bool))
    } 

    const value = {currentDropdown, setCurrentDropdown, addItemToCart, cartItems,cartCount,removeItemFromCart,clearItem,cartTotal};


    return <CartContext.Provider value= {value}>{children}</CartContext.Provider>
}