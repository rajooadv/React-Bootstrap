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
import Crad from './Test.js/Crad';
 import img1 from './Test.js/photo-1542816417-0983c9c9ad53.avif'
 import img2 from './Test.js/photo-1609599006353-e629aaabfeae.avif'

function App() {
  return (
    <>
      {/* <Home />
      <AboutComponent />
      <Services />
      <Projects />
      <Blog />
      <OurTeam />
      <Testimonial />
      <Contact />
      <Footer/> */}
      {/* <NotFound/> */}
      <div className="d-flex flex-wrap">

      {/* <Crad  ahmad="Usman"  whiteColor="danger" waleed='waleed' img={img1}/>
      <Crad  ahmad="shayan" whiteColor="info"  waleed="ahmed" img={img2}/>
      <Crad  ahmad="waleed" whiteColor="warning"  waleed="usman" img={img1}/>
      <Crad  ahmad="Ahmad"  whiteColor="light" waleed="shayan" img={img2}/> */}
          <Crad  ahmad="Usman" textColor="pink" waleed='waleed' img={img1}/>
      <Crad  ahmad="shayan" textColor="red"  waleed="ahmed" img={img2}/>
      <Crad  ahmad="waleed" textColor="yellow" waleed="usman" img={img1}/>
      <Crad  ahmad="Ahmad" textColor="green"  waleed="shayan" img={img2}/>
           </div>

    </>
  );
}

export default App;
