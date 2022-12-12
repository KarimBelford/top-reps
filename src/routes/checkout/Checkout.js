import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";
import { CheckoutContainer, CheckoutHeader,HeaderBlock,Total} from "./CheckoutStyles";

const Checkout = () => {
    const {cartItems,cartTotal} = useContext(CartContext)
    
    return(
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Decription</span>
                </HeaderBlock>
                <HeaderBlock>             
                <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            
            {cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem= {cartItem}/>          )}
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    )
}

export default Checkout;