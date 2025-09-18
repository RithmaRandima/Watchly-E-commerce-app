import React from "react";
import "./Items.css";

const Items = (props) => {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.item_price_new}</div>
        <div className="item-price-old">${props.item_price_old}</div>
      </div>
    </div>
  );
};

export default Items;
