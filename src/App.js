import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import './index.css';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Why from './components/Why/Why';
import Review from './components/Review/Review';
import Stats from './components/Stats/Stats';

function App() {
  return (
    <div id='header'>

      <NavBar />
      <Hero />
      <About />
      <Menu />
      <Why />
      <Review />
      <Stats />




    </div>




  );
}

export default App;
