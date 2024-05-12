import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard';
// import "./fetchdata.css";
// import logindata from './loginsetup';
// https://react-project-sutlej-dependency-020-3.onrender.com/users?email=khalil@gmail.com

import Showcart from './showcart';

const Usercards = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://react-project-sutlej-dependency-020-3.onrender.com/users?email=${login.email}`); 
        const jsonData = await response.json();
        setCardsData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div className="card-container">
        {cardsData.cart.map((card, index) => (
            // <showcart/>
          <Showcart key={index} product={card} />
        ))}
      </div>
    </div>
  );
};

export default Usercards;
