import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Mycard from './components/fetchdata';
import ProductDetails from './components/showproductDetails';

function App() {
  return (
    <Router>
      <Link to="/fetchusercard">
        <button>Show Cart</button>
      </Link>

      <Routes>
        <Route path="/" element={<Mycard />} />
        <Route path="/showproductDetails/:productTitle" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
