import './App.css';
import Navbar from "./components/navbar/Navbar";
import Herosection from "./components/herosection/Herosection";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact"; 

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <About/>
      <Skills/>
      <Contact/>
    </>
  );
}

export default App;
