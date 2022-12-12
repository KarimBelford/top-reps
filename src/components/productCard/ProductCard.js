import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Button, {ButtonTypeClass} from "../button/Button";
import { ProductCardContainer, Img, Footer,Name,Price} from "./ProductCardStyles";

const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(CartContext)
    const {name, price, imageUrl} = product;

    const addProductToCart = () => addItemToCart(product)
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