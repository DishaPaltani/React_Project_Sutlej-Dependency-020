import React, { useState } from 'react';
import axios from 'axios';

const Showcart = ({ product, userId }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleIncrement = async () => {
    const newQuantity = quantity + 1;
    await updateQuantityOnServer(product.id, newQuantity, userId);
    setQuantity(newQuantity);
  };

  const handleDecrement = async () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      await updateQuantityOnServer(product.id, newQuantity, userId);
      setQuantity(newQuantity);
    }
  };

  // const handleRemoveFromCart = async () => {
  //   try {
  //     await axios.delete(`https://react-project-sutlej-dependency-020-3.onrender.com/users/${userId}/cart/${product.id}`);
  //     console.log('Item removed from cart successfully');
  //     // Optionally, you can perform additional actions like updating the UI to reflect the removal
  //   } catch (error) {
  //     console.error('Error removing item from cart:', error);
  //   }
  // };
  const removeProductFromServer = async (productName) => {
    try {
      const userEmail = "Baba@gmail.com"; // Replace with the actual user's email
      const response = await fetch(`https://react-project-sutlej-dependency-020-3.onrender.com/users?email=${encodeURIComponent(userEmail)}`);
      const userDataArray = await response.json();
      console.log(userDataArray.cart);
      if (userDataArray.cart.length > 0) {
        const userData = userDataArray[0];
        if (userData && Array.isArray(userData.cart)) {
          // Create a new cart array excluding the product to be removed
          const updatedCart = userData.cart.filter(product => product.title !== productName);
          
          // Update the user data with the modified cart
          userData.cart = updatedCart;
  
          // Send a PUT request to update the user data
          await fetch(`https://react-project-sutlej-dependency-020-3.onrender.com/users/${userData.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
          });
  
          console.log('Product removed from cart successfully');
        } else {
          console.error('User data or cart is invalid:', userData);
        }
      } else {
        console.error('No user data found for the specified email:', userEmail);
      }
    } catch (error) {
      console.error('Error removing product from cart:', error);
    }
  };
  
  
  const updateQuantityOnServer = async (productId, newQuantity, userId) => {
    try {
      await axios.put(`https://react-project-sutlej-dependency-020-3.onrender.com/users/${userId}/cart/${productId}`, { quantity: newQuantity });
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
          <button onClick={handleDecrement} style={{background: "white"}}>-</button>
          <span style={{margin:"5px", }}>{quantity}</span>
          <button onClick={handleIncrement} style={{background:"white"}}>+</button>
        </div>
        <button onClick={removeProductFromServer} style={{background:"orange",borderRadius:"10px",width:"80%", height:"30px", margin:"10px"}}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default Showcart;

// import React, { useState } from 'react';
// import axios from 'axios';

// const Showcart = ({ product, userId }) => { // Pass userId as a prop
//   const [quantity, setQuantity] = useState(product.quantity);
//   const handleIncrement = async () => {
//     const newQuantity = quantity + 1;
//     await updateQuantityOnServer(product.id, newQuantity, userId); // Pass product.id
//     setQuantity(newQuantity);
//   };
  
//   const handleDecrement = async () => {
//     if (quantity > 1) {
//       const newQuantity = quantity - 1;
//       await updateQuantityOnServer(product.id, newQuantity, userId); // Pass product.id
//       setQuantity(newQuantity);
//     }
//   };
  
//   const updateQuantityOnServer = async (productId, newQuantity, userId) => {
//     try {
//       await axios.put(`https://react-project-sutlej-dependency-020-3.onrender.com/users/${userId}/cart/${productId}`, { quantity: newQuantity });
//       console.log('Quantity updated successfully');
//     } catch (error) {
//       console.error('Error updating quantity:', error);
//     }
//   };
  
//   return (
//     <div className="card" >
//       <img src={product.image_url} alt={product.title} />
//       <div className="card-body">
//         <h5 className="card-title">{product.title}</h5>
//         <p className="card-text">{product.description}</p>
//         <p className="card-price">${product.price}</p>
//         <div>
//           <button onClick={handleDecrement}>-</button>
//           <span>{quantity}</span>
//           <button onClick={handleIncrement}>+</button>
//         </div>

//       </div>
//       <button>Remove from Cart</button>
//     </div>
//   );
// }

// export default Showcart;
