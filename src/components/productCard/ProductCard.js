import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import Button from "../button/Button";
import './ProductCard.scss'

const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(CartContext)
    const {name, price, imageUrl} = product;

    const addProductToCart = () => addItemToCart(product)
    return(
        <div className='product-card-container'>
            <img alt= {`${name}`} src={imageUrl}/>
            <div className= 'footer'>
                <span className='name'>{name}</span>
                <span className= 'price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={addProductToCart}>Add To Cart</Button>
        </div>
    )
}

export default ProductCard