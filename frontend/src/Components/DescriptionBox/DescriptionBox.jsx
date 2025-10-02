import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt in
          ipsa unde veniam iste! Fugiat non, sint consectetur praesentium
          magnam, quibusdam commodi et fuga repudiandae dolorum enim dolore
          facere amet! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Commodi quibusdam rem rerum, ratione odit nihil sequi. Eius provident
          facere dolore?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          consectetur optio quia iusto. Vitae quisquam officia voluptatem id
          odit aspernatur minus voluptas tempora at tenetur cum corrupti, quasi
          dolorem modi!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
