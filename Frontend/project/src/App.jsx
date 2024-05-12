import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import WithSubnavigation from './components/Navigation';
import './App.css' 
import Navbar from './components/MainNav';
import LargeWithLogoCentered from './components/Footer';
import Footer from './components/Footer1';
import Subnav from './components/Subnav2';




function App() {
  return (
    <ChakraProvider>
    
      {/* <Navbar /> */}
      <Subnav />
        <WithSubnavigation />
        {/* <SubNavbar /> */}
        <Footer />
  <LargeWithLogoCentered /> 
 

    </ChakraProvider>
  );
}

export default App;


