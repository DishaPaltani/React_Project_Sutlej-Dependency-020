import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Mycard from './M_comp';
// import ProductDetails from './M_components/M_showproductDetails';
// import Usercards from './M_components/M_fetchusercard';
// import Home from './M_components/initial';
import Mycard from './M_fetchdata';
import ProductDetails from './M_showproductDetails';

function Cart() {
  return (
    <Router>
      {/* <Home></Home>
      <Usercards></Usercards> */}
      
      <Routes>
        <Route path="/" element={<Mycard />} />
        <Route path="/M_showproductDetails/:productTitle" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default Cart;