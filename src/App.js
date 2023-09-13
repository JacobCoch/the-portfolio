import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </main>
  );
}

export default App;
