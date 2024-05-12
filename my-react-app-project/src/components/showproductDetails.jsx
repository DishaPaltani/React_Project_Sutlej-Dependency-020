import React from 'react';

const showproductDetails = ({product}) => {
  return (
<div className="card" >
  <p>hihih</p>
      {/* <img src={product.image_url} alt={product.title} /> */}
      <div className="card-body">
        {/* <h5 className="card-title">{product.title}</h5> */}
        <p className="card-text" >{product.description}</p>
        {/* <p className="card-price">${product.price}</p> */}
      </div>
    </div>
  )
}

export default showproductDetails
