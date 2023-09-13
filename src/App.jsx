import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import './App.css';
import Home from './components/Home/Home';

export default function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <About />
    </main>
  );
}
