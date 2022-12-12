import React from "react";
import DirectoryItem from "../directoryItem/DirectoryItem";
import { CategoriesContainer } from "./CategoryMenuStyles";

const categories = [
    {
      id: 1,
      title: 'Accessories',
      imageUrl: 'https://ae01.alicdn.com/kf/HTB1idqOXSr85uJjSZPhq6zXgpXaD/DXHKDYZ-gold-men-luxury-designer-belt-men-s-brand-high-quality-leather-black-retro-brown-belt.jpg',
      route: 'shop/accessories'
    },
    {
      id: 2,
      title: 'Hats',
      imageUrl: 'https://is4.fwrdassets.com/images/p/fw/45/AMIF-MA21_V1.jpg',
      route: 'shop/hats'
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      route: 'shop/sneakers'
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      route: 'shop/womens'
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      route: 'shop/mens'
    },
  ];


const CategoryMenu = () => {
    
    return (
        <CategoriesContainer>
            {categories.map((category) => (
            <DirectoryItem key = {category.id} category= {category}/>
        ))}       
    </CategoriesContainer>
    )
}

export default CategoryMenu
 