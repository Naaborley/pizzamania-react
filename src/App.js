
import './App.css';
import Navbar from './components/Navbar';
import AboutPizza from './components/AboutPizza';
import PizzaTypes from './components/PizzaTypes';
import Hero from './components/Hero';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutPizza title='Pizza' />
      <PizzaTypes title='Types' />
      <Footer />

      
    </div>
  );
}

export default App;
