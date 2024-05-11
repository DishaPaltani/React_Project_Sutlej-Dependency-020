import React from 'react';

export const Products = () => {
  const wineData = {
    "wines": [
      {
        "title": "Imported Wines Under 3k",
        "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/ImportedWinesUnder3kcollectionimage.jpg?V=09052024120008"
      },
      {
        "title": "Fruity Reds",
        "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/FruityReds.jpg?V=09052024120008"
      },
      {
        "title": "Bordeaux Wines",
        "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/MajesticBordeaux.jpg?V=09052024120008"
      },
      {
        "title": "Burgundy Wines",
        "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/VintageBurgundy.jpg?V=09052024120008"
      }
    ]
  };

  return (
    <div>

      <h1 className="SpotLight-heading">In the Spotlight</h1>
      <div className="SpotLight-products">
        {wineData.wines.map((wine, index) => (
          <div key={index}>
            <img src={wine.image} alt={wine.title} style={{ width: '250px', height: '250px',border: "1px solid" }} />
            <p className="spotlight-title">{wine.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


 export const Gifts = () => {
    const giftData = {
      "gifts": [
        {
          "title": "Valentine’s Day Hampers",
          "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/valentineday.jpg?V=09052024120008"
        },
        {
          "title": "Birthday Gifts",
          "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/birthdaygifts.jpg?V=09052024120008"
        },
        {
          "title": "Champagne",
          "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/Champagne1.jpg?V=09052024120008"
        },
        {
          "title": "For Him",
          "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/birthdaygifts.jpg?V=09052024120008"
        }
      ]
    };
  
    return (
      <div>
        <h1 className="Gifts-heading">Gifting by Wine Park</h1>
        <div className="Gifts-products">
          {giftData.gifts.map((gift, index) => (
            <div key={index}>
              <img src={gift.image} alt={gift.title} style={{ width: '250px', height: '200px' }} />
              <p className="gifts-title">{gift.title}</p>
              <button className="browse-button">Browse</button>
            </div>
          ))}
        </div>
      </div>
    );
  };


  export const FeatureBrands = () =>{
    const brandsData= {
      "brands": [
        {
          "title": "Brancaia",
          "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/Brancaia_Logo.png?V=10052024130532"
        },
        {
          "title": "Saint Clair",
          "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/SaintClairlogo.jpeg?V=10052024130532"
        },
        {
          "title": "Saint Cosme",
          "image": "https://d33vadtjbny7xj.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/SaintCosmelogo.gif?V=10052024130532"
        },
        {
          "title": "Thelema",
          "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/Thelemalogo.png?V=10052024130532"
        }
      ]
    };


    return (
      <div>
        <h1 className="Brands-heading">Featured Brands</h1>
        <div className="Brands-card">
          {brandsData.brands.map((brand, index) => (
            <div key={index} >
              <img src={brand.image} alt={brand.title} style={{ width: '250px', height: '250px', border: "1px solid" }} />
              <p className="Brands-title">{brand.title}</p>
              
            </div>
          ))}
        </div>
      </div>
    );
  

  }



  export const DiscoverWines = () =>{


    const discoverwine= {
      "wines": [
        {
          "title": "Organic Wines",
          "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/OrganicWines1.jpg?V=10052024130532"
        },
        {
          "title": "Low Alcohol Wines",
          "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/LowAlcohol2.jpg?V=10052024130532"
        },
        {
          "title": "Case of the Month",
          "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/CaseOftheMonth1.jpg?V=10052024130532"
        },
        {
          "title": "Vivino 4.0+",
          "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/Vivino4.jpg?V=10052024130532"
        }
      ]
    };



    return (
      <div>
        <h1 className="discoverWine-heading">Discover Wines</h1>
        <div className="discoverWine-card">
          {discoverwine.wines.map((wine, index) => (
            <div key={index} >
              <img src={wine.image} alt={wine.title} style={{ width: '250px', height: '200px', border: "1px solid" }} />
              <p className="discoverWine-title">{wine.title}</p>
              
            </div>
          ))}
        </div>
      </div>
    );
  

  }





  export const Blogs = () =>{


    const blog= {
      "wines": [
        {
          "title": "Three New Burgundy Pinots Savour",
          "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/5.10.2023.jpg?V=10052024130532"
        },
        {
          "title": "Wine Storage Blunders Never Again",
          "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/12-04-2024.jpg?V=10052024130532"
        },
        {
          "title": "International Shiraz Day",
          "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/16.02.2024.jpg?V=10052024130532"
        },
        {
          "title": "Whites To Enjoy This Summer",
          "image": "https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/StaticImages/03-28-2024.jpg?V=10052024130532"
        }
      ]
    };



    return (
      <div>
        <h1 className="discoverWine-heading">Blogs</h1>
        <div className="discoverWine-card">
          {blog.wines.map((content, index) => (
            <div key={index} >
              <img src={content.image} alt={content.title} style={{ width: '250px', height: '200px', border: "1px solid" }} />
              <p className="discoverWine-title">{content.title}</p>
              
            </div>
          ))}
        </div>
      </div>
    );
  

  }

