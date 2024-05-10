
import './App.css';
import { Category } from './components/Category';
import { Colors } from './components/Colors';
import Navigation from './components/Navigation';
import {Products} from './components/Products';
import { Recommended } from './components/Recommended';
import Sidebar from './components/Sidebar';


function App() {

  return (
    <>
    <Sidebar/>
    <Navigation/>
    <Recommended/>
    <Products/>
    
    <Category/>
    <Colors/>     
    </>
  )
}

export default App


