import React, {Fragment} from "react";
import {useSelector} from 'react-redux'
import { selectCategoryMap } from "../../store/categories/category.selector";
import CategoryPreview from "../../components/categoryPreview/CategoryPreview";


const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoryMap)

    return (
        <Fragment>
            
            {Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products}/>

            })}
            
        </Fragment>
    )
}

export default CategoriesPreview;