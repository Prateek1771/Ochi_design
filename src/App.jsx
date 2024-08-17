import About from './components/About';
import Cards from './components/Cards';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Landingpage from './components/Landingpage';
import Marque from './components/Marque';
import Navbar from './components/Navbar';
import LocomotiveScroll from 'locomotive-scroll';



function App() {
// eslint-disable-next-line no-unused-vars
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-[#252525] text-white">
      <Navbar />
      <Landingpage />
      <Marque />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  )
}

export default App;