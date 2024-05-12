import React, { useState, useEffect } from 'react';
// import ProductCard from './ProductCard';

import ProductCard from './ProductCards';

import "./fetchdata.css";

const Mycard = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://react-project-sutlej-dependency-020-3.onrender.com/catalog`);
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
        {cardsData.map((card, index) => (
          <ProductCard key={index} product={card} />
        ))}
      </div>
    </div>
  );
};

export default Mycard;
