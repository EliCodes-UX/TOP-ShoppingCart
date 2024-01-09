import Product from './Product';
import { PRODUCTS } from '../../products.js';

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
      {PRODUCTS.map(product => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
};

export default Shop;
