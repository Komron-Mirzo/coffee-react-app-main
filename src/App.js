import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import './index.css';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Why from './components/Why/Why';
import Testimonial from './components/Testimonial/Testimonial';
import Stats from './components/Stats/Stats';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div id='header'>

      <NavBar />
      <Hero />
      <About />
      <Menu />
      <Why />
      <Testimonial />
      <Stats />
      <Blog />




    </div>




  );
}

export default App;
