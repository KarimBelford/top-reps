import React,{Routes, Route} from 'react-router-dom'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { getCategoriesAndDocuments } from '../../utils/firebaseUtils/firebaseUtils'
import { setCategories } from '../../store/categories/category.action'
import CategoriesPreview from '../categoriesPreview/CategoriesPreview'
import Category from '../category/Category'


const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments();
            dispatch(setCategories(categoriesArray));
        }
       getCategoriesMap();
    },[dispatch]);
    
    return (
        <Routes>
            <Route index element= {<CategoriesPreview/>} />
            <Route path=':category' element={<Category/>}/>
        </Routes>
       
    )
}

export default Shop;