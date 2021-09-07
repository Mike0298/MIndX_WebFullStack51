import React from "react";
import "./itemCard.css";

const ItemCard = (props) => {
  const { category, description, image, price, title } = props.item;

  return (
    <div className="itemCard">
      <div className="itemImage">
        <img src={image} alt="Product" />
      </div>
      <div className="itemDetail">
        <div className="title">{title}</div>
        <div className="category">{category}</div>
        <div className="description">{description}</div>
        <div className="price">${price}</div>
      </div>
    </div>
  );
};

export default ItemCard;
