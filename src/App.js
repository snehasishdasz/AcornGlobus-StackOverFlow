import {BrowserRouter as Router , Route, Routes} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header.jsx';
import LeftSideBar from "./components/LeftSideBar/LeftSideBar.jsx";

function App() {
  return (
    <>
    <Router>
      <Header/>
      <LeftSideBar/>
      <Routes>
        <Route path="/" />
      </Routes>

    </Router>
    </>
  );
}

export default App;
