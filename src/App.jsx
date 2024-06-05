import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bar from "./components/Bar";
import Marque from "./components/Marque";
import Section from "./components/Section";
import Eyes from "./components/Eyes";
import Projects from "./components/Projects";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Navbar />
      <Hero />
      <Bar />
      <Marque />
      <Section />
      <Eyes />
      <Projects />
      <Cards />
      <Footer />
    </>
  );
};

export default App;
