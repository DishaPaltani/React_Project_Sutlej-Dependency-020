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
