import React, { createContext, useState } from "react";

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
    
}

export const CartContext  = createContext({
    currentDropdown : false,
    setCurrentDropdown : () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
})


export const CartProvider = ({children}) => {
    const [currentDropdown, setCurrentDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
        setCartCount(cartCount+1)
    }


    const value = {currentDropdown, setCurrentDropdown, addItemToCart, cartItems,cartCount};


    return <CartContext.Provider value= {value}>{children}</CartContext.Provider>
}