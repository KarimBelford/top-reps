import React from "react";
import DirectoryItem from "../directoryItem/DirectoryItem";
import './CategoryMenu.scss'


const CategoryMenu = ({categories}) => {
    return (
        <div className = 'categories-container'>
            {categories.map((category) => (
            <DirectoryItem key = {category.id} category= {category}/>
        ))}       
    </div>
    )
}

export default CategoryMenu
 