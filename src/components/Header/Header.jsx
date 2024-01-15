import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
const Header = () => {
    
    return (
      <>
        <nav>
          <div className="navbar">
            <Link to="/" className="nav-item nav-logo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png" alt="logo" />
            </Link>
            <form >
              <FontAwesomeIcon icon={faMagnifyingGlass} width="18" className="search-icon"/>
              <input type="text" placeholder="Search..."/>
            </form>
            <Link to="/" className="nav-item nav-btn">About</Link>
            <Link to="/" className="nav-item nav-btn">Product</Link>
            <Link to="/" className="nav-item nav-btn">For Teams</Link>
          </div>
        </nav>
      </>
    );
}

export default Header