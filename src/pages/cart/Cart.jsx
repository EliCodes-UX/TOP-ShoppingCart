import { useContext } from 'react';
import ShopContext from '../../context/shop-context';
import { PRODUCTS } from '../../products';
import CartItem from './cart-item';

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map(product => {
          if (cartItems[product.id] !== 0) {
            // eslint-disable-next-line react/jsx-key
            return <CartItem data={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
