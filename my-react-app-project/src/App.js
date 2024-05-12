// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Mycard from './components/fetchdata';
// import ProductDetails from './components/showproductDetails';

// function App() {
//   return (
//     <Router>
//       <Link to="/fetchusercard">
//         <button>Show Cart</button>
//       </Link>

//       <Routes>
//         <Route path="/" element={<Mycard />} />
//         <Route path="/showproductDetails/:productTitle" element={<ProductDetails />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mycard from './M_components/M_fetchdata';
import ProductDetails from './M_components/M_showproductDetails';
import Usercards from './M_components/M_fetchusercard';
import Home from './M_components/initial';

function App() {
  return (
    <Router>
      <Home></Home>
      <Usercards></Usercards>
      
      <Routes>
        <Route path="/" element={<Mycard />} />
        <Route path="/M_showproductDetails/:productTitle" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
