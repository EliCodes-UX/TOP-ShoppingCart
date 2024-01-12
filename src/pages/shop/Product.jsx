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
      <button className='addToBtn'>Add to Cart</button>
    </div>
  );
};

export default Product;
