import Navbar from "./components/Navbar"
import About from "./pages/About";
import Home from "./pages/Home";
import Skills from "./pages/Skills"
import MyProjects from "./pages/MyProjects";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <MyProjects />
      
    </div> 
  );
}

export default App;
