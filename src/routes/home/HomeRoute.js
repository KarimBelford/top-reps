import React from "react";
import { Outlet } from "react-router-dom";
import CategoryMenu from "../../components/categoryMenu/CategoryMenu";

//Displays homepage 
const HomeRoute = () => {
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
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];

  return (
    <div>
        <CategoryMenu categories={categories}/>
        <Outlet/>
    </div>
  )
};


export default HomeRoute;
