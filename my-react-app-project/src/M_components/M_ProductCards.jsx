import React from 'react';
import "./ProductCards.css";
import { Link } from "react-router-dom";
import axios from 'axios';
// // https://react-project-sutlej-dependency-020-3.onrender.com/users?email=khalil@gmail.com/cart


const ProductCard = ({ product }) => {
  // const [showDetails, setShowDetails] = useState(false);

  const addProductsToServer = async (product) => {
    const sampleProducts = 
      {
        "image_url": product.image_url,
        "title": product.title,
        "price": product.price,
        "description": product.Description,
        "quantity": 1
      }
      try {
        const userEmail = "Baba@gmail.com"; // Replace with the actual user's email
        const response = await axios.get(`https://react-project-sutlej-dependency-020-3.onrender.com/users?email=${encodeURIComponent(userEmail)}`);
        const userDataArray = response.data;
  
        if (userDataArray.length > 0) {
          const userData = userDataArray[0]; 
    
          if (userData && Array.isArray(userData.cart)) {
            const updatedUserData = {
              ...userData,
              cart: [...userData.cart, sampleProducts] 
            };
    
            await axios.put(`https://react-project-sutlej-dependency-020-3.onrender.com/users/${userData.id}`, updatedUserData);
            console.log('Product added to cart successfully');
          } else {
            console.error('User data or cart is invalid:', userData);
          }
        } else {
          console.error('No user data found for the specified email:', userEmail);
        }
      } catch (error) {
        console.error('Error adding product to cart:', error);
      }
  };
  // const handleViewDetails = () => {
  //   setShowDetails(true);
  // };

  return (
    <div className="card">
      <img src={product.image_url} alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        {/* <p className="card-text" >{product.description}</p> */}
        <p className="card-price">${product.price}</p>
      </div>
      {/* <p onClick={handleViewDetails}>View Details</p>
      {showDetails && <ProductDetails product={product} />} */}
      <Link to={`/M_showproductDetails/${encodeURIComponent(product.title)}`}>
            <h2>{product.title}</h2>
          </Link>
          
      <button onClick={() => addProductsToServer(product)}>Add To cart</button>
    </div>

  );
};

export default ProductCard;

