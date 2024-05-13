import { Carousel } from "./Carousel";
import { Category } from "./Category";
import { BeerProductCarousel, MixedCollection, NewArrivals, ProductCarousel, WineAccesories } from "./Product_Caurousel";
import { Blogs, DiscoverWines, FeatureBrands, Gifts, Products } from "./Products";


function Call(){
 return(
    <div>
          <Carousel />
        <Category />
        <Products />
        <Gifts />
        <ProductCarousel />
        <DiscoverWines />
        <NewArrivals />
        <BeerProductCarousel />
        <FeatureBrands />
        <MixedCollection />
        <WineAccesories />
        <Blogs />
    </div>
 ) 
}
export default Call;