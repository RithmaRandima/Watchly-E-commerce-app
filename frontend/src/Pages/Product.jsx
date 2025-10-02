import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";

const Product = () => {
  const { allProduct } = useContext(ShopContext);
  const { productID } = useParams();
  console.log(productID);
  const product = allProduct.find((e) => e.id === Number(productID));

  console.log("Params:", useParams());
  console.log("Products:", allProduct);

  return (
    <div>
      <Breadcrum product={product} />
    </div>
  );
};

export default Product;
