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
            <li onClick={toggleDropdown}>Price</li>
                {showDropdownPrice && (
                    <div className="price-dropdown">
                        <ul>
                            <li>
                                <input
                                    type="checkbox"
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
            <li onClick={toggleMaterials}>Material</li>
                {showMaterials && (
                    <div className="materials-dropdown">
                        <ul>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Cotton
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Denim
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Gold-Plated
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Leather
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Linen
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Metal
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Nubuck
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Polyester
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Rayon
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Rubber
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Shellac
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Silk
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Suede
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Synthetic Leather
                            </li>
                        </ul>
                    </div>
                )}
            <li onClick={toggleProductType}>Product Type</li>
                {showProductType && (
                    <div className="dropdown">
                        <ul>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Accessories
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Belts
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Bottoms
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Dresses
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Hats
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Shoes
                            </li>
                            <li>
                                <input
                                type="checkbox"
                                />
                                Socks
                            </li>
                            <li>
                                <input
                                type="checkbox"
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
