import React from "react";
import { Outlet } from "react-router-dom";
import CategoryMenu from "../../components/categoryMenu/CategoryMenu";

//Displays homepage 
const HomeRoute = () => {

  return (
    <div>
        <CategoryMenu/>
        <Outlet/>
    </div>
  )
};


export default HomeRoute;
