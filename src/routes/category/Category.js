import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useSelector} from 'react-redux'
import { selectCategoryMap } from "../../store/categories/category.selector";
import ProductCard from "../../components/productCard/ProductCard";
import { CategoryContainer, CategoryTitle} from "./CategoryStyles";


const Category = () => {
    
    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoryMap)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category])

    },[category,categoriesMap])

    

    return(
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products &&
                    products.map((product) =>(<ProductCard key= {product.id} product={product} />))
                }
            </CategoryContainer>
        </Fragment>
    )

}

export default Category;