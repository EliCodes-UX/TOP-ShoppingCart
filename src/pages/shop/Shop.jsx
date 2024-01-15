import Product from './Product';
import { PRODUCTS } from '../../products.js';
import './shop.css';

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Lorem Shop</h1>
        <p>fermentum odio eu feugiat pretium nibh ipsum</p>
      </div>
      <div className='products'>
        {PRODUCTS.map(product => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
