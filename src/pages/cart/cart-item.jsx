import React, { useContext } from 'react';
import ShopContext from '../../context/shop-context';

const CartItem = props => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeToCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className='cartItem'>
      cart-items
      <img src={productImage} />
      <div className='description'>
        <p>
          <b> {productName} </b>
        </p>
        <p>${price}</p>
        <div className='countHandler'>
          <button onClick={() => removeToCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={e => updateCartItemCount(Nymber(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
