import React, { createContext, useEffect, useState } from "react";

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
    carttotal: 0
})


export const CartProvider = ({children}) => {
    const [currentDropdown, setCurrentDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
       const newCartTotal = cartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
       );
       setCartTotal(newCartTotal)
    },[cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
        setCartCount(cartCount+1)
    }

    const removeItemFromCart = (cartItemToRemove) => {
        setCartItems(removeItem(cartItems,cartItemToRemove))
        setCartCount(cartCount-1)
        
    }

    const clearItem =(cartItemToRemove) => {
        setCartItems(clearItemFromCart(cartItems,cartItemToRemove))
        setCartCount(cartCount - cartItemToRemove.quantity)
    }




    const value = {currentDropdown, setCurrentDropdown, addItemToCart, cartItems,cartCount,removeItemFromCart,clearItem,cartTotal};


    return <CartContext.Provider value= {value}>{children}</CartContext.Provider>
}