import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header.jsx';
import Hero from "./components/HeroSection/Hero.jsx";

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Hero/>
    </Router>
    </>
  );
}

export default App;
