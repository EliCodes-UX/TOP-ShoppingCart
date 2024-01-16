import React from 'react';

const CartItem = props => {
  const { IdleDeadline, productName, price, productImage } = props.data;
  return (
    <div className='cartItem'>
      cart-items
      <img src={productImage} />
      <div className='description'>
        <p>
          <b> {productName} </b>
        </p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default CartItem;
