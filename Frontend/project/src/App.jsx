// import React from 'react';
// import { ChakraProvider } from '@chakra-ui/react';
// import WithSubnavigation from './components/Navigation';
// import './App.css' 
// import Navbar from './components/MainNav';
// import LargeWithLogoCentered from './components/Footer';
// import Footer from './components/Footer1';
// import Subnav from './components/Subnav2';
// import { Carousel } from './components/Carousel';
// import { Category } from './components/Category';
// import { Blogs, DiscoverWines, FeatureBrands, Gifts, Products } from './components/Products';
// import { BeerProductCarousel, MixedCollection, NewArrivals, ProductCarousel, WineAccesories } from './components/Product_Caurousel';
// import Home from '../../../../Anurag/React_Project_Sutlej-Dependency-020/loginform-5/src/components/Home';
// import Login from '../../../../Anurag/React_Project_Sutlej-Dependency-020/loginform-5/src/components/Login';
// import Route from 'react-router-dom'
// import  Routes from 'react-router-dom'
// import Router from 'react-router-dom'


// function App() {
//   return (
//     <ChakraProvider>
    
    
//       <Subnav />
//         <WithSubnavigation />

//         <Router>
//       <div>
//         <Subnav />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           {/* Add more routes as needed */}
//         </Routes>
//       </div>
//     </Router>
       
//         {/* disha */}
//         <Carousel/>
//     <Category/>
//     <Products/>
//     <Gifts/>
//     <ProductCarousel/>
//     <DiscoverWines/>
//      <NewArrivals/>

    
//     <BeerProductCarousel/>
//     <FeatureBrands/>
//     <MixedCollection/>
//     <WineAccesories/>
//     <Blogs/>
//         {/* disha */}
//         <Footer />
//   <LargeWithLogoCentered /> 
 

//     </ChakraProvider>
//   );
// }

// export default App;


import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import WithSubnavigation from './components/Navigation';
import './App.css';
import Navbar from './components/MainNav';
import LargeWithLogoCentered from './components/Footer';
import Footer from './components/Footer1';
import Subnav from './components/Subnav2';
import { Axios } from 'axios';


import Home from '../src/components/Signin/Home';
import Login from '../src/components/Signin/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from '../src/components/Signin/Details';
import Errror from '../src/components/Signin/Errror';
import Call from './components/middle';
import App2 from './components/Aditya/App2';
import Cart from './components/cart/Cart';
import ProductDetails from './components/cart/M_showproductDetails';
import Mycard from './components/cart/M_fetchdata';
import Usercards from './components/cart/M_fetchusercard';
function App() {
  return (
    <ChakraProvider>
      <Router>
        <Subnav />
        <WithSubnavigation />
        
        <Routes>
          <Route path='/Call' element={<Call />} />
          <Route path='/details' element={<Call />} />
          <Route path='/newwines' element={<App2 />} />
        <Route path='/Home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Errror />} />
      <Route path='/Cart' element={<Usercards />} />


      <Route path="/new" element={<Mycard />} />
        <Route path="/M_showproductDetails/:productTitle" element={<ProductDetails />} />

        </Routes>
     
       
        {/* <App2 /> */}
        <Footer />
        <LargeWithLogoCentered />
      </Router>
    </ChakraProvider>
  );
}

export default App;
