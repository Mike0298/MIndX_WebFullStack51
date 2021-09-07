import React, { useState, useEffect } from "react";
import axios from "axios";
import "./shopView.css";

import ItemCard from "../ItemCard/itemCard";

const ShopView = () => {
  const [shop, setShop] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      axios.get("https://fakestoreapi.com/products/").then((res) => {
        let data = res.data;
        setShop(data);
      });
    }
    return () => (mounted = false);
  }, []);

  let itemRender =
    shop.length > 0 ? (
      <div className="itemList">
        {shop.map((item) => {
          const { id } = item;
          return <ItemCard key={id} item={item} />;
        })}
      </div>
    ) : (
      <div className="loading">Loading...</div>
    );

  return (
    <div className="shop-container">
      <div className="page-title">Item List</div>
      {itemRender}
    </div>
  );
};

export default ShopView;
