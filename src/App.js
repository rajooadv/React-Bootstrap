import './App.css';
import Home from './components/Home';
import AboutComponent from './components/AboutComponent'
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog'
import OurTeam from './components/OurTeam';
import Testimonial from './components/Testimonial'
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Home />
      <AboutComponent />
      <Services />
      <Projects />
      <Blog />
      <OurTeam />
      <Testimonial />
      <Contact />
      <Footer/>
      {/* <NotFound/> */}

    </>
  );
}

export default App;
