import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsMenuClicked(false);
    setIsDropdownOpen(false);
  };

  const toggleMenuDropdown = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            {/* NAV HOME LOGO */}
            <Link className="navbar-brand nav-header" to="/">SEN</Link>

            {/* NAV SEARCH BAR */}
            {/* <div className="box"> */}
                <input type="search" name="search" />
                <svg width="26" height="19" fill="BLACK" className="bi bi-search search-icon" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            {/* </div> */}

            {/* MAIN DROPDOWN */}
            <button className="navbar-toggler" type="button" onClick={toggleDropdown}>
                <span className="navbar-toggler-icon"></span>
                    Menu
            </button>
            <div className={`collapse navbar-collapse 
                ${
                    isDropdownOpen ? "show" : ""
                }`}
                id="navbarNavDarkDropdown"
            >
            {/* DROP DOWN MENU FOR CATEGORIES */}
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <button className="btn btn-dark dropdown-toggle" onClick={toggleMenuDropdown}>
                        Categories
                        </button>
                        <ul className={`dropdown-menu ${isMenuClicked ? "show" : ""}`}>
                            <li>
                                <Link className="dropdown-item" to="/new-this-season" onClick={closeDropdown}>New This Season</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/clothes" onClick={closeDropdown}>Women</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/clothes/new" onClick={closeDropdown}>Add New Clothes</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
}
