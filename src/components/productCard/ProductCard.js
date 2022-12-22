import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import { addItemToCart } from "../../store/cart/cart.action";
import Button, {ButtonTypeClass} from "../button/Button";
import { ProductCardContainer, Img, Footer,Name,Price} from "./ProductCardStyles";
import { selectCartItems } from "../../store/cart/cart.selector";

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const {name, price, imageUrl} = product;

    const addProductToCart = () => dispatch(addItemToCart(cartItems,product))
    return(
        <ProductCardContainer>
            <Img alt= {`${name}`} src={imageUrl}/>
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            
            <Button buttonType={ButtonTypeClass.inverted} onClick={addProductToCart}>Add To Cart</Button>

        </ProductCardContainer>
    )
}

export default ProductCard