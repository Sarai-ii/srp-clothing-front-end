import { Link } from "react-router-dom";
import { useState } from "react";
import "../Css/Navbar.css"

export default function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar navbar-light">
      <div className="container-fluid">
        {/* NAV HOME LOGO */}
        <Link className="navbar-brand nav-header" to="/">
          SEN EXTRAVAGANZA
        </Link>

        {/* MAIN DROPDOWN */}
        <button
          className="btn navbar-toggler"
          type="button"
          onClick={toggleDropdown}
        >
          <span className="btn navbar-toggler-icon"></span>
          Menu
        </button>
         {/* NAV SEARCH BAR */}
        <div className="box">
                <svg width="26" height="25" fill="BLACK" className="bi bi-search search-icon" viewBox="0 -2 15 23">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
                <input className="box-form" type="search" name="search" placeholder="Search" />
        </div>
        {/* DROP DOWN MENU FOR CATEGORIES */}
        <div
          className={`collapse navbar-collapse ${
            isDropdownOpen ? "show" : ""
          }`}
          id="navbarNavDarkDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <ul
                className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
              >
                <li>
                  <Link
                    className="dropdown-item"
                    to="/clothes/new"
                    onClick={closeDropdown}
                  >
                    Add New Clothes (New)
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/new-this-season"
                    onClick={closeDropdown}
                  >
                    New This Season (Index)
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/womens"
                    onClick={closeDropdown}
                  >
                    Women *Beta*
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/mens"
                    onClick={closeDropdown}
                  >
                    Men *Beta*
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
