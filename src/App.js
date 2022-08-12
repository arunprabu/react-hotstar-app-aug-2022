// Ideal comp for your layout
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Concepts from './components/Concepts/Concepts';
import About from './components/About/About';
import HooksDemo from './components/HooksDemo/HooksDemo';
import ContextDemo from './components/ContextDemo/ContextDemo';
import { CartContext } from './contexts/CartContext';
import { useReducer } from 'react';
import cartReducer from './reducers/cartReducer';

// App Component 
function App() {

  const [cartState, cartDispatch] = useReducer(cartReducer);

  const cartData = {
    cartState: cartState ,
    cartDispatch: cartDispatch
  }

  // must return JSX 
  return (
    <CartContext.Provider value={cartData}>
      <BrowserRouter>
        <div>
          <Header />

          <div className='container mt-5'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/concepts' element={<Concepts />} />
              <Route path='/about' element={<About />} />
              <Route path='/hooks' element={<HooksDemo />} />
              <Route path='/products' element={<ContextDemo />} />
              {/* TODO: learn about 404 */}
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
