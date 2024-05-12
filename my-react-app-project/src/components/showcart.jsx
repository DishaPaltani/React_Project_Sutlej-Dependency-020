import React, { useState } from 'react';
import axios from 'axios';

const Showcart = ({ product }) => {

  const [quantity, setQuantity] = useState(1);

  const handleIncrement = async () => {
    const newQuantity = quantity + 1;
    await updateQuantityOnServer(product.id, newQuantity);
    setQuantity(newQuantity);
  };

  const handleDecrement = async () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      await updateQuantityOnServer(product.id, newQuantity);
      setQuantity(newQuantity);
    }
  };

  const updateQuantityOnServer = async (productId, newQuantity) => {
    try {
      await axios.put(`https://react-project-sutlej-dependency-020-3.onrender.com/users/${productId}`, { quantity: newQuantity });
      console.log('Quantity updated successfully');
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  return (
    <div className="card" >
      <img src={product.image_url} alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-price">${product.price}</p>
        <div>
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Showcart;
