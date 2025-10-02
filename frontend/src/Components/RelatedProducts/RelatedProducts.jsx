import React from "react";
import "./RelatedProducts.css";
import data_product from "../Assets/data";
import Items from "../Items/Items";

const RelatedProducts = () => {
  return (
    <div className="relatedProducts">
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.slice(0, 4).map((item, i) => {
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

export default RelatedProducts;
