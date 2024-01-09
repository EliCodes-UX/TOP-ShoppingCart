import React from 'react';

const Product = props => {
  const { id, productName, price, productImage } = props.data;

  return (
    <div className='product'>
      <img src={productImage} alt={productName} />
      <div className='description'>
        <h2>{productName}</h2>
        <p>Price: ${price}</p>
      </div>
    </div>
  );
};

export default Product;
