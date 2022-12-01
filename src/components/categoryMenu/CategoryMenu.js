import React from "react";
import CategoryItem from "../categoryItem/CategoryItem";
import './CategoryMenu.scss'


const categories = [
    {
      id: 1,
      title: 'Accessories',
      imageUrl: 'https://ae01.alicdn.com/kf/HTB1idqOXSr85uJjSZPhq6zXgpXaD/DXHKDYZ-gold-men-luxury-designer-belt-men-s-brand-high-quality-leather-black-retro-brown-belt.jpg'
    },
    {
      id: 2,
      title: 'Hats',
      imageUrl: 'https://is4.fwrdassets.com/images/p/fw/45/AMIF-MA21_V1.jpg'
    },
    {
      id: 3,
      title: 'Shoes',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://i.pinimg.com/originals/7f/ef/12/7fef12b9cb83443f2d6e7be618d8ea6b.jpg'
    }
]

const CategoryMenu = () => {
    return (
        <div className = 'categories-container'>
            {categories.map(({title, id, imageUrl}) => (
            <CategoryItem key = {id} title = {title} imageUrl = {imageUrl}/>
        ))}       
    </div>
    )
}

export default CategoryMenu
 