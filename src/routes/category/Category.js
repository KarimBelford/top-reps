import React, { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import { CategoryContainer, CategoryTitle} from "./CategoryStyles";


const Category = () => {

    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
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