import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './pages/home/Home.jsx';
import Cart from './pages/cart/Cart.jsx';
import Shop from './pages/shop/Shop.jsx';
import { ShopContextProvider } from './context/shop-context.jsx';

function App() {
  return (
    <>
      <div className='container'>
        <ShopContextProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/shop' element={<Shop />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </div>
    </>
  );
}

export default App;
