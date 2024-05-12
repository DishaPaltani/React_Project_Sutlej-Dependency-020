// ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productTitle } = useParams();
  const [product, setProduct] = useState(null);

  // console.log(product);
  // const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://react-project-sutlej-dependency-020-3.onrender.com/catalog?title=${productTitle} `);
        const jsonData = await response.json();
        setProduct(jsonData[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [productTitle]);

  if (!product) {
    return <div>Loading...</div>;
  }
console.log(product);
  return (
    <div className="cardfull" style={{ display: 'flex' }}>
      {/* <p>hihih</p> */}
      <img  src={product.image_url} alt={product.title} style={{ width: '50%', height: '50%', borderRadius: '10px' }}/>
      <div className="cardb" style={{ margin: '20px',textAlign:"center"}}>
        <h5 className="cardt" style={{ fontSize: '2rem' }}>{product.title}</h5>
        <p className="cardd" style={{ fontSize: '1.5rem' }}>{product.description}</p>
        <h3 className="cardp" style={{ fontSize: '1.5rem',fontStyle:"bold" }}>${product.price}</h3>
      </div>
    </div>
  );
};

export default ProductDetails;
