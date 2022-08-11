// Ideal comp for your layout
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Concepts from './components/Concepts/Concepts';
import About from './components/About/About';
import HooksDemo from './components/HooksDemo/HooksDemo';

// App Component 
function App() {
  // must return JSX 
  return (
    <BrowserRouter>
      <div>
        <Header />

        <div className='container mt-5'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/concepts' element={<Concepts />} />
            <Route path='/about' element={<About />} />
            <Route path='/hooks' element={<HooksDemo />} />
            {/* TODO: learn about 404 */}
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
