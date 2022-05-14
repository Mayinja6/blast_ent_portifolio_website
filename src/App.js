import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Landing from "./components/landing/Landing";
import Skills from "./components/skills/Skills";
import BackToTop from "./components/BackToTop/BackToTop";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <>
      <Landing />
      <About />
      <Skills />
      <Services />
      <Contact />
      <BackToTop />
    </>
  );
};

export default App;
