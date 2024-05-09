import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import WithSubnavigation from './components/Navigation';
import './App.css' 
import Navbar from './components/MainNav';
import LargeWithLogoCentered from './components/Footer';
// import SubNavbar from './Subnav';
// import SubNavbar from './Subnav';



function App() {
  return (
    <ChakraProvider>
    
      <Navbar />
        <WithSubnavigation />
        {/* <SubNavbar /> */}

  <LargeWithLogoCentered /> 

    </ChakraProvider>
  );
}

export default App;
