import React from "react";
import { useNavigate } from "react-router-dom";
import { DirectoryItemContainer, BackgroundImage, Body } from "./DirectoryItemStyles";

// creates each category on website
const DirectoryItem = ({category}) => {
  const {imageUrl, title, route} = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route)
  return (
      <DirectoryItemContainer onClick={onNavigateHandler}>
        <BackgroundImage imageUrl = {imageUrl}/> 
        <Body>
            <h2>{title}</h2>
            <p>Shop Now</p>
        </Body>
    </DirectoryItemContainer>  

  )

}

export default DirectoryItem;