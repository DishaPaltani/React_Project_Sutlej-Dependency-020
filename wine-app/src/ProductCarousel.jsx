import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ProductCarousel = () => {


    const products = [
        {
            name: "Bisol, BELSTAR Cult, Prosecco Extra Dry NV",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/bisol_belstarprosecco.jpg?V=10052024092423",
            MRP: "₹ 2,995"
        },
        {
            name: "Saint Clair, Pinot Noir 2022",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/fe25d2ad-f7ac-4665-a596-faab508c4ea0.jpg?V=10052024092423",
            MRP: "₹ 4,195"
        },
        {
            name: "Brancaia, TRE 2021",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/1710-21-Brancaia-TRE.jpg?V=10052024092423",
            MRP: "₹ 4,195"
        },
        {
            name: "Boekenhoutskloof, The Wolftrap Red 2022",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/1687-22-Red.jpg?V=10052024092423",
            MRP: "₹ 2,395"
        },
        {
            name: "Susana Balbo, Crios Malbec 2022",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/4ee1f929-6e53-4ce9-a9b7-d4fbcce76530.jpg?V=10052024092423",
            MRP: "₹ 3,895"
        },
        {
            name: "Tenuta Sant Antonio, Scaia Corvina Red 2020",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/ac16c98c-b12b-4652-a765-60ebbf7b91e9.jpg?V=10052024130532",
            MRP: "₹ 3,195"
        },
        {
            name: "Tenuta Sant Antonio, Scaia White 2022",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/1714-22-Sant-Antonio.jpg?V=10052024130532",
            MRP: "₹ 3,195"
        },
        {
            name: "Man Family Wines, Pinotage, Bosstok 2021",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/Man%20Bosstok%20Pinotage_NV_large.jpg?V=10052024130532",
            MRP: "₹ 1,995"
        }
    ]; // Your product data

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true, // Enable arrows for manual navigation
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="product-carousel-container">
            <h1 className="best-sellers-heading">Best Sellers</h1>
            <Slider {...settings}>
                {products.map((product, index) => (
                    <div className="product-card" key={index}>
                        <img src={product.image} alt={product.name} />
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p>{product.MRP}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};