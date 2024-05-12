// import React, { useState, useEffect } from 'react';
// import Showcart from './Showcart'; // Import the Showcart component
// import axios from 'axios';

// const Usercards = () => {
//   const [cardsData, setCardsData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://react-project-sutlej-dependency-020-3.onrender.com/users?email=Baba@gmail.com`); 
//         const jsonData = await response.json();
//         setCardsData(jsonData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Products</h1>
//       <div className="card-container">
//         {/* {cardsData && cardsData.length > 0 && cardsData[0].cart && cardsData[0].cart.map((item, index) => (
//           <Showcart key={index} product={item} />
//         ))} */}
//         

//       </div>
//     </div>
//   );
// };

// export default Usercards;


import React, { useState, useEffect } from 'react';
import Showcart from './M_Showcart';
import axios from 'axios';

const Usercards = () => {
  const [userData, setUserData] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://react-project-sutlej-dependency-020-3.onrender.com/users?email=Baba@gmail.com`);
        setUserData(response.data[0]); // Assuming the first user is the desired user
        calculateTotalPrice(response.data[0].cart);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const calculateTotalPrice = (cart) => {
    if (cart && cart.length > 0) {
      const total = cart.reduce((accumulator, item) => {
        return accumulator + (item.price * item.quantity);
      }, 0);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  };
  return (
    <div>
      <h1>Products</h1>
      <div className="card-container">
        {/* {userData && userData.cart && userData.cart.map((item, index) => (
          <Showcart key={index} product={item} userId={userData.id} />
        ))} */}
        {userData && userData.length > 0 && userData[0].cart && userData[0].cart.map((item, index) => (
  <Showcart key={index} product={item} userId={userData[0].id} /> 
))}
      </div>
      <div>
        <h3>Total Price: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default Usercards;
