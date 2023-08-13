import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import '../Css/Sidebar.css';

export default function ToggleableSidebar(clothing) {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [showDropdownPrice, setShowDropdownPrice] = useState(false)
    const [showMaterials, setShowMaterials] = useState(false)
    const [showProductType, setShowProductType] = useState(false)
    const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });


    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
        setShowDropdownPrice(true)
        setShowMaterials(true)
        setShowProductType(true)
    };

    const handleMouseEnter = (e) => {
    // Show the sidebar when hovering the left side of the screen (within 1/4 of the page is entered)
        if (e.clientX <= 400) {setSidebarOpen(true)}
    };

    const handleMouseLeave = () => {
    setSidebarOpen(false)
    setShowDropdownPrice(false)
    setShowMaterials(false)
    setShowProductType(false)
    };

    const toggleDropdown = () => {
    setShowDropdownPrice(!showDropdownPrice);
    };
    const toggleProductType= () => {
        setShowProductType(!showProductType);
    };
    const toggleMaterials= () => {
        setShowMaterials(!showMaterials);
    };

    const handlePriceRangeChange = (e) => {
        const { name, value } = e.target;
        setPriceRange((prevState) => ({
          ...prevState,
          [name]: parseFloat(value),
        }));
    };

    // useEffect(() => {
    //     console.log(clothing.price);
    // }, [priceRange]);

  return (
    <div
      className={`sidebar ${sidebarOpen ? 'open' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        Home/New-this-season/clothing
      </div>
      <div className="sidebar-content">
        {/* Sidebar content */}
        <ul className="dropdown-menus">
            {/* <span style={{fontSize: "100px"}}>&#8675;</span> */}
            <li onClick={toggleDropdown}>Price 
                <svg xmlns="" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill arrow" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg> 
            </li>
                {showDropdownPrice && (
                    <div className="price-dropdown">
                        <ul>
                            <li>
                                <input
                                    type="checkbox"
                                    id="checkbox"
                                    checked={priceRange.min === 0}
                                    onChange={handlePriceRangeChange}
                                    name="min"
                                    value={0}
                                />
                                Price: $0 - $50
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                checked={priceRange.min === 50}
                                onChange={handlePriceRangeChange}
                                name="min"
                                value={50}
                                />
                                Price: $50 - $100
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                checked={priceRange.min === 100}
                                onChange={handlePriceRangeChange}
                                name="min"
                                value={100}
                                />
                                Price: $100 - $200
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                checked={priceRange.min === 200}
                                onChange={handlePriceRangeChange}
                                name="min"
                                value={200}
                                />
                                Price: $200 - $400
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                checked={priceRange.min === 400}
                                onChange={handlePriceRangeChange}
                                name="min"
                                value={400}
                                />
                                Price: $400 - $600
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                checked={priceRange.min === 600}
                                onChange={handlePriceRangeChange}
                                name="min"
                                value={600}
                                />
                                Price: $600 - $800
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                checked={priceRange.min === 800}
                                onChange={handlePriceRangeChange}
                                name="min"
                                value={800}
                                />
                                Price: $800+
                            </li>
                        </ul>
                    </div>
                )}
            <li onClick={toggleMaterials}>Material 
                <svg xmlns="" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill arrow" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg> 
            </li>
                {showMaterials && (
                    <div className="materials-dropdown">
                        <ul>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Cotton
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Denim
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Gold-Plated
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Leather
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Linen
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Metal
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Nubuck
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Polyester
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Rayon
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Rubber
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Shellac
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Silk
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Suede
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Synthetic Leather
                            </li>
                        </ul>
                    </div>
                )}
            <li onClick={toggleProductType}>Product Type
                <svg xmlns="" width="16" height="16" fill="currentColor" className="bi bi-caret-down-fill arrow" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg> 
            </li>
                {showProductType && (
                    <div className="dropdown">
                        <ul>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                
                                />
                                Accessories
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Belts
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Bottoms
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Dresses
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Hats
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Shoes
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Socks
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                id="checkbox"
                                />
                                Tops
                            </li>
                        </ul>
                    </div>
                )}
            </ul>
      </div>
    </div>
  );
}
/* NOTES
* I STILL NEED TO ADD SOME FUNCTIONALITY TO MY PRICE RANGE ALGORITHIM
* THE CHECKBOXES SHOULD FILTER AND CHANGE WHAT'S DISPLAYED ON THE MAIN SECTION OF THE PAGE. (NOT COMPLETED)
* I STILL NEED TO ADD A ALGORITHM THAT MAKES A PHYSICAL CHANGE, POSSIBLY THE SEARCH BAR OR WORKING ON THE CART FUNCTIONALITY TO PASS THE LAST REQUIREMENT FOR THE PROJECT.
* STYLING STILL NEEDS TO BE COMPLETED FOR THIS PAGE
* POSSIBLY CONSIDER MOVING EACH DROPDOWN INTO IT'S OWN LABELED COMPONENT.
*/
