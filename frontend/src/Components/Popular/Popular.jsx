import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Items from "../Items/Items";

const Popular = () => {
  return (
    <div className="popular">
      <h1>Popular IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.slice(0, 4).map((item) => {
          return (
            <Items
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              item_price_new={item.new_price}
              item_price_old={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
