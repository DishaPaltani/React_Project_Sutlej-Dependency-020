import React from 'react'
import './App.css'
import { Blogs, DiscoverWines, FeatureBrands, Gifts, Products } from './components/Products'
import { Category } from './components/Category'
import { Carousel } from './components/Carousel'
import { BeerProductCarousel, MixedCollection, NewArrivals, ProductCarousel, WineAccesories } from './ProductCarousel'

function App() {
   return (
    <>
    <Carousel/>
    <Category/>
    <Products/>
    <Gifts/>
    <ProductCarousel/>
    <DiscoverWines/>
     <NewArrivals/>

    
    <BeerProductCarousel/>
    <FeatureBrands/>
    <MixedCollection/>
    <WineAccesories/>
    <Blogs/>
    
    </>
   
 

    
  )
}

export default App





