// Ideal comp for your layout
import React, { Suspense, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
// the following are not lazy loaded
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import { CartContext } from './contexts/CartContext';
import cartReducer from './reducers/cartReducer';
import ErrorBoundary from './containers/ErrorBoundary/ErrorBoundary';

// the following are lazy loaded
const Concepts = React.lazy( () => import('./components/Concepts/Concepts'));
const About = React.lazy( () => import('./components/About/About'));
const HooksDemo = React.lazy( () => import('./components/HooksDemo/HooksDemo'));
const ContextDemo = React.lazy( () => import('./components/ContextDemo/ContextDemo'));

// App Component 
function App() {

  const [cartState, cartDispatch] = useReducer(cartReducer);

  const cartData = {
    cartState: cartState,
    cartDispatch: cartDispatch
  }

  // must return JSX 
  return (
    <CartContext.Provider value={cartData}>
      <BrowserRouter>
        <div>
          <Header />

          <div className='container mt-5'>
            <Suspense fallback={
              <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            }>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/concepts' element={<Concepts />} />
                <Route path='/about' element={<About />} />
                <Route path='/hooks' element={<HooksDemo />} />
                <Route path='/products' element={<ContextDemo />} />
                {/* TODO: learn about 404 */}
              </Routes>
            </Suspense>
          </div>
          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
