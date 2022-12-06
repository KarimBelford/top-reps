import React, { createContext, useState } from "react";

export const CartContext  = createContext({
    currentDropdown : false,
    setCurrentDropdown : () => null

})

export const CartProvider = ({children}) => {
    const [currentDropdown, setCurrentDropdown] = useState(false);
    const value = {currentDropdown, setCurrentDropdown}


    return <CartContext.Provider value= {value}>{children}</CartContext.Provider>
}