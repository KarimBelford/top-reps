import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
import { CategoryPreviewContainer, PreviewContainer } from "./CategoryPreviewStyles";

const CategoryPreview = ({title, products}) => {

    return(
        <CategoryPreviewContainer>
            <Link to = {title}>
                <h2>
                    <span>{title.toUpperCase()}</span>
                </h2>
            </Link>
            <PreviewContainer>
                {
                   products
                   .filter((_,idx) => idx < 4 )
                   .map((product) => 
                   <ProductCard key={product.id} product = {product}/>) 
                }

            </PreviewContainer>

        </CategoryPreviewContainer>
    )

}

export default CategoryPreview;