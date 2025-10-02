import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import { IoIosArrowDown } from "react-icons/io";
import Items from "../Components/Items/Items";

const ShopCategory = (props) => {
  const { allProduct } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <div className="shopcategory-banner">
        <h1>{props.name}</h1>
        <img src={props.banner} alt="" />
      </div>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <IoIosArrowDown />
        </div>
      </div>

      <div className="shopcategory-products">
        {allProduct.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Items
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                item_price_new={item.new_price}
                item_price_old={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
