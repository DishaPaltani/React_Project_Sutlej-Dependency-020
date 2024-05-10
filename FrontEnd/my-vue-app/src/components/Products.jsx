import "./css-compo/Products.css";
import { AiFillStar } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";
 
function Products() {
 return (
   <section className="card-container">
     <section className="card">
       <img className="card-img"
       src="https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Medium/ac16c98c-b12b-4652-a765-60ebbf7b91e9.jpg?V=08052024130948" alt="wine_img" />
       <div className="card-details">
         <h3 className="card-title">Wine</h3>
         <section className="card-reviews">
           <AiFillStar className="rating-star"/><AiFillStar className="rating-star"/><AiFillStar className="rating-star"/><AiFillStar className="rating-star"/>
           <span className="total-reviews">120</span>
         </section>
         <section className="card-price">
           <div className="price">
             <del>$300</del> 245
           </div>
           <div className="bag">
           <FaBagShopping className="bag-icons" />
           </div>
         </section>
       </div>
     </section>
     
   </section>
   
 )
}


export {Products};
