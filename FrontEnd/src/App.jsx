
import './App.css';
import { Category } from './components/Category';
import { Colors } from './components/Colors';
import Navigation from './components/Navigation';
import {Products} from './components/Products';
import { Recommended } from './components/Recommended';

function App() {

  return (
    <>
    <Navigation/>
    <Products/>
    <Recommended/>
    <Category/>
    <Colors/>     
    </>
  )
}

export default App


