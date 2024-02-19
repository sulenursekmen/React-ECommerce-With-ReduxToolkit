import React from "react";
import { useNavigate } from "react-router-dom";

export const Product = ({ product }) => {

  const navigate =useNavigate();

  const defaultImage = "https://img-incommerce-yargici.mncdn.com/Content/Images/Thumbs/22167828.jpeg";
  const fallbackImage = "https://img-incommerce-yargici.mncdn.com/Content/Images/Thumbs/22167828.jpeg";

  const productImage = product?.images || defaultImage;


  const handleImageError = (event) => {
    event.target.src = fallbackImage;
  };
  console.log(product, "categories");

  return (
    <div className="product-item" onClick={()=>navigate(`products/${product?.id}`)}>
      <div className="product-item-price">
        {product?.price} <span>$</span>
      </div>
      <img
        src={productImage}
        alt=""
        onError={handleImageError}  
      />
      <p className="product-item-title">{product?.title}</p>
    </div>
  );
};
