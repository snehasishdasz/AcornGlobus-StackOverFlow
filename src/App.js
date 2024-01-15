import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" />
      </Routes>

    </Router>
    </>
  );
}

export default App;
