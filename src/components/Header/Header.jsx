import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import "./Header.scss"
import Navlogo from "../../assets/navlogo.svg"
const Header = () => {
    
    return (
      <>
        <div className="navbar">
          <section className="navbar_wrapper">
            <div className="navbar">
              <div className="logo">
                <img src={Navlogo} alt="stack-over-flow-logo" />
              </div>
              <div className="search_wrapper">
              <AiOutlineSearch className="search_icon" size={20} />
              <input type="text" className="search_input" placeholder="Search" />
              </div>
              <div className="menu">
                <a href="/">About</a>
                <a href="/">Products</a>
                <a href="/">For teams</a>
              </div>
              <AiOutlineMenu className="menu_bar" size={20}/>
            </div>
          </section>
        </div>
      </>
    );
}

export default Header