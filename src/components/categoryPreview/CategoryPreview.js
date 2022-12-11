import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
import './categoryPreview.scss'

const CategoryPreview = ({title, products}) => {

    return(
        <div className='category-preview-container'>
            <Link to = {title}>
                <h2>
                    <span>{title.toUpperCase()}</span>
                </h2>
            </Link>
            <div className='preview'>
                {
                   products
                   .filter((_,idx) => idx < 4 )
                   .map((product) => 
                   <ProductCard key={product.id} product = {product}/>) 
                }

            </div>

        </div>
    )

}

export default CategoryPreview;