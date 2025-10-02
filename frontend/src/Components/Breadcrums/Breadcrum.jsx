import React from "react";
import "./Breadcrum.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrum = (props) => {
  const { product } = props;

  if (!product) return <div className="Breadcrum">Loading...</div>;

  return (
    <div className="Breadcrum">
      HOME <MdKeyboardArrowRight />
      SHOP <MdKeyboardArrowRight />
      {product.category} <MdKeyboardArrowRight />
      {product.name}
    </div>
  );
};

export default Breadcrum;
