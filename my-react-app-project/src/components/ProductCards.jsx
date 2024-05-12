import React, { useState } from 'react';
import "./ProductCards.css";
// import { Link } from "react-router-dom";
import axios from 'axios';
// https://react-project-sutlej-dependency-020-3.onrender.com/users?email=khalil@gmail.com/cart

import ShowProductDetails from './showproductDetails';

const ProductCard = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);

  const addProductsToServer = async (product) => {
    const sampleProducts = [
      {
        "image_url": product.image_url,
        "title": product.title,
        "price": product.price,
        "description": product.Description,
        "quantity": 1
      }]
    try {
      const response = await axios.post('https://react-project-sutlej-dependency-020-3.onrender.com/users', sampleProducts);
      console.log('Products added:okokokok', response.data);
    } catch (error) {
      console.error('Error adding products:', error);
    }
  };
  const handleViewDetails = () => {
    setShowDetails(true);
  };

  return (
    <div className="card">
      <img src={product.image_url} alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        {/* <p className="card-text" >{product.description}</p> */}
        <p className="card-price">${product.price}</p>
      </div>
      <p onClick={handleViewDetails}>View Details</p>
      {showDetails && <ShowProductDetails product={product} />} {/* Pass product data as prop */}
      {/* <ShowProductDetails product={product} /> */}

      <button onClick={() => addProductsToServer(product)}>Add To cart</button>
    </div>

  );
};

export default ProductCard;
