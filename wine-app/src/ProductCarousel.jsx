import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const ProductCarousel = () => {
    const products = [
        {
            name: "Bisol, BELSTAR Cult, Prosecco Extra Dry NV",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/bisol_belstarprosecco.jpg?V=10052024092423",
            MRP: "MRP₹ 2,995"
        },
        {
            name: "Saint Clair, Pinot Noir 2022",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/fe25d2ad-f7ac-4665-a596-faab508c4ea0.jpg?V=10052024092423",
            MRP: "MRP₹ 4,195"
        },
        {
            name: "Brancaia, TRE 2021",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/1710-21-Brancaia-TRE.jpg?V=10052024092423",
            MRP: "MRP₹ 4,195"
        },
        {
            name: "Boekenhoutskloof, The Wolftrap Red 2022",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/1687-22-Red.jpg?V=10052024092423",
            MRP: "MRP₹ 2,395"
        },
        {
            name: "Susana Balbo, Crios Malbec 2022",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/4ee1f929-6e53-4ce9-a9b7-d4fbcce76530.jpg?V=10052024092423",
            MRP: "MRP₹ 3,895"
        },
        {
            name: "Tenuta Sant Antonio, Scaia Corvina Red 2020",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/ac16c98c-b12b-4652-a765-60ebbf7b91e9.jpg?V=10052024130532",
            MRP: "MRP₹ 3,195"
        },
        {
            name: "Tenuta Sant Antonio, Scaia White 2022",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/1714-22-Sant-Antonio.jpg?V=10052024130532",
            MRP: "MRP₹ 3,195"
        },
        {
            name: "Man Family Wines, Pinotage, Bosstok 2021",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/Man%20Bosstok%20Pinotage_NV_large.jpg?V=10052024130532",
            MRP: "MRP₹ 1,995"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
                            <h3 className="Product-name">{product.name}</h3>
                            <p lassName="Product-price">{product.MRP}</p>
                            <button className="cart-button">Add To Cart</button>
                        </div>
                      
                    </div>
                ))}
            </Slider>
        </div>
    );
};









export const BeerProductCarousel = () => {
    const beerproducts = [
        {
            name: "Heineken Beer, 330 ml",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/Heineken.jpg?V=10052024130532",
            MRP: "MRP ₹ 160"
        },
        {
            name: "Moonshine Traditional Mead, 330 ml",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/3.jpg?V=10052024130532",
            MRP: "MRP ₹ 199"
        },
        {
            name: "Moonshine Apple Cider Mead, 330 ml",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/1933.jpg?V=10052024130532",
            MRP: "MRP ₹ 199"
        },
        {
            name: "Moonshine Grilled Pineapple, 330 ml",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/Moon-Pineapple.jpg?V=10052024130532",
            MRP: "MRP ₹ 199"
        },
        {
            name: "Moonshine Guava Chilli Mead, 330 ml",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/Moonshine_Guava_Chilli_330ml.jpg?V=10052024130532",
            MRP: "MRP ₹ 199"
        },
        {
            name: "Corona Extra Premium Beer, 330 ml",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/Corona.jpg?V=10052024130532",
            MRP: "MRP₹ 200"
        },
        {
            name: "BIRA Light, 330 ml",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/Bira-7.jpg?V=10052024130532",
            MRP: "MRP ₹ 160"
        },
        {
            name: "Erdinger Weiss Beer, 330 ml",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/Erdinger-Wheat.jpg?V=10052024130532",
            MRP: "MRP₹ 630"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
        
        <div className="beer-carousel-container">
            <h1 className="beer-sellers-heading">Beer & Mead</h1>
            <Slider {...settings}>
                {beerproducts.map((beer, index) => (
                    <div className="beer-card" key={index}>
                        <img src={beer.image} alt={beer.name} />
                        <div className="beer-info">
                            <h3 className="beer-name">{beer.name}</h3>
                            <p lassName="beer-price">{beer.MRP}</p>
                           </div>
                      </div>
                    
                ))}
            </Slider>
           
        </div>
       
        
    );
};



export const NewArrivals = () => {
    const newData = [
        {
            name: "Gramona Ca La Mar Mustillant Blanc 2022",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/Gramona-Ca-La-Mar.jpg?V=10052024130532",
            MRP: "MRP₹ 2,995"
        },
        {
            name: "Champagne Deutz Brut Classic NV",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/DEUTZ---Deutz-Brut-Classic-BD(1).jpg?V=10052024130532",
            MRP: "MRP₹ 1,995"
        },
        {
            name: "Pesquie, Edition 1912M Red 2021",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/Pesquie-Rouge-Edition-1912M_HD-NM.jpg?V=10052024130532",
            MRP: "MRP₹ 2,795"
        },
        {
            name: "Christian Moreau Chablis 1er cru Vaillon 2022",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/Christian-Moreau-1er-Cru-Vaillon.jpg?V=10052024130532",
            MRP: "MRP₹ 10,925"
        },
        {
            name: "Gramona, Gessami 2022",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/Gramona-Gessami-1.jpg?V=10052024130532",
            MRP: "MRP₹ 3,495"
        },
        {
            name: "Rudolf Fürst, Spatburgunder Tradition 2020",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/Weingut-Rudolf-Furst-Spatburgunder-Pinot-Noir-Tradition-2020.jpg?V=10052024130532",
            MRP: "MRP₹  7,495"
        },
        {
            name: "Champagne Deutz Brut Rose NV",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/DEUTZ---Deutz-Brut-Rose-BD.jpg?V=10052024130532",
            MRP: "MRP₹ 15,650"
        }
        
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
            <h1 className="best-sellers-heading">New Arrivals</h1>
            <Slider {...settings}>
                {newData.map((Data, index) => (
                    <div className="product-card" key={index}>
                        <img src={Data.image} alt={Data.name} />
                        <div className="product-info">
                            <h3 className="Product-name">{Data.name}</h3>
                            <p lassName="Product-price">{Data.MRP}</p>
                            <button className="cart-button">Add To Cart</button>
                        </div>
                      
                    </div>
                ))}
            </Slider>
        </div>
    );
};




export const MixedCollection = () => {
    const mixedData = [
        {
            name: "The Diwali Hamper",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/The-Diwali-Hamper.jpg?V=10052024130532",
            MRP: "MRP₹ 16,570"
        },
        {
            name: "The Refreshing Collection",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/The-BestSellers-Collection.jpg?V=10052024130532",
            MRP: "MRP₹ 15,370"
        },
        {
            name: "Case of the Month - December",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/Case-of-the-Month-December.jpg?V=10052024130532",
            MRP: "MRP₹  19,170"
        },
        {
            name: "The Refreshing Collection",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/The-Refreshing-Collection.jpg?V=10052024130532",
            MRP: "MRP₹ 15,370"
        },
        {
            name: "The Brand New Bunch",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/The-Brand-New-Bunch.jpg?V=10052024130532",
            MRP: "MRP₹ 23,350"
        },
        {
            name: "Case of the Month - February",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/caseofmonth-feb.jpg?V=10052024130532",
            MRP: "MRP₹ 17,270"
        },
        {
            name: "Case of the Month - January",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/case-of-the-mon-Jan24.jpg?V=10052024130532",
            MRP: "MRP₹ 18,150"
        },
        {
            name: "The Christmas Hamper",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/The-Christmas-Hamper.jpg?V=10052024130532",
            MRP: "MRP₹ 19,570"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
            <h1 className="best-sellers-heading">Mixed Case Collection</h1>
            <Slider {...settings}>
                {mixedData.map((mixed, index) => (
                    <div className="product-card" key={index}>
                        <img src={mixed.image} alt={mixed.name} />
                        <div className="product-info">
                            <h3 className="Product-name">{mixed.name}</h3>
                            <p lassName="Product-price">{mixed.MRP}</p>
                            <button className="cart-button">Add To Cart</button>
                        </div>
                      
                    </div>
                ))}
            </Slider>
        </div>
    );
};







export const WineAccesories = () => {
    const wineitems = [
        {
            name: "Zalto Universal Glasses (Set of 2)",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/zalto-universal-glass.jpg?V=10052024130532",
            MRP: "MRP₹ 15,000"
        },
        {
            name: "Lucaris, Burgundy - Red Wine glasses (Set of 6)",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/1LS02BG26E.jpg?V=10052024130532",
            MRP: "MRP₹ 3,036"
        },
        {
            name: "Magic decanter (Essential Wine Aerator)",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/Magic-D.jpg?V=10052024130532",
            MRP: "MRP₹  1,200"
        },
       
        {
            name: "Lucaris, Temptation Decanter (1000 ml)",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/Temptation-Decanter-S.jpg?V=10052024130532",
            MRP: "MRP₹ 5,297"
        },
        {
            name: "Pulltap's opener - Black",
            image: "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/Products/Thumbnail/DSC04596_edit_800X600-new.jpg?V=10052024130532",
            MRP: "MRP₹ 495"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
            <h1 className="best-sellers-heading">Wine Accessories</h1>
            <Slider {...settings}>
                {wineitems.map((item, index) => (
                    <div className="product-card" key={index}>
                        <img src={item.image} alt={item.name} />
                        <div className="product-info">
                            <h3 className="Product-name">{item.name}</h3>
                            <p lassName="Product-price">{item.MRP}</p>
                            <button className="cart-button">Add To Cart</button>
                        </div>
                      
                    </div>
                ))}
            </Slider>
        </div>
    );
};





