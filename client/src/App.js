import Navbar from "./components/Navbar"
import About from "./pages/About";
import Home from "./pages/Home";
import Skills from "./pages/Skills"
import Footer from "./components/footer"
import Projects from "./pages/Projects";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
      
    </div> 
  );
}

export default App;
