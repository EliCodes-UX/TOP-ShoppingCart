import React from 'react';

const Product = props => {
  const { id, productName, price, productImage } = props.data;

  return (
    <div>
      <img src={productImage} alt={productName} />
      <h2>{productName}</h2>
      <p>ID: {id}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Product;
