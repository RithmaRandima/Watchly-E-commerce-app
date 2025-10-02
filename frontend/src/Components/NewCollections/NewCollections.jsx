import React from "react";
import "./NewCollections.css";
import Items from "../Items/Items";
import new_collection_data from "../Assets/newCollections";

const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection_data.map((item) => {
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

export default NewCollections;
