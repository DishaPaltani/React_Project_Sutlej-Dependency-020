import React, { useState } from 'react';
import { BsFillBagFill } from 'react-icons/bs'; // Assuming you're using react-icons for the bag icon
import { AiFillStar } from 'react-icons/ai'; // Assuming you're using react-icons for the star icon

const Card = ({ img, title, star, reviews, prevPrice, newPrice, company, color, category }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    // Create a new item object
    const newItem = {
      img,
      title,
      star,
      reviews,
      prevPrice,
      newPrice,
      company,
      color,
      category
    };

    // Add the new item to the cart
    setCart([...cart, newItem]);

    // Log to the console for demonstration purposes
    console.log('Item added to cart:', title);
  };

  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag" onClick={handleAddToCart}>
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
