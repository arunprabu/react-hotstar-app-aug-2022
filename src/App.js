// Ideal comp for your layout
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// App Component 
function App() {
  // must return JSX 
  return (
    
    <div>
      <Header />

      <div className='container mt-5'>
        <h1>Success!</h1>
      </div>

      <Footer />
    </div>
  );
}

export default App;
