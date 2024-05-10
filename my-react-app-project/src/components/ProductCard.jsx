import React from 'react';
import "./ProductCard.css";
// import showproductDetails from './showproductDetails';


const ProductCard = ({ product }) => {
  return (
    <div className="card" >
      <img src={product.image_url} alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        {/* <p className="card-text" >{product.description}</p> */}
        <p className="card-price">${product.price}</p>
      </div>
      <button>Add To cart</button>
    </div>
  );
};

export default ProductCard;
