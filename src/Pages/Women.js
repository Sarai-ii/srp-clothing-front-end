//DEPENDENCIES
import axios from "axios";
import { useState, useEffect } from "react";
//DATABASE
const API = process.env.REACT_APP_API_URL;
export default function Women() {
    const [clothing, setClothing] = useState([]);

    useEffect(() => {
        axios
          .get(`${API}/clothing`)
          .then((response) => setClothing(response.data))
          .catch((c) => console.warn("catch", c));
      }, []);

  return (
    <div>
      <h1>Women's Clothing</h1>
      <ul>
        {clothing.map((clothes) => {
          // Check if the category is "womens"
          if (clothes.category.includes("women")) {
            return (
                <div className="card">
                    <div className="card-body">
                        <li className="card-text" key={clothing.id}>
                            {clothes.name}
                        </li>
                        <li className="card-text" key={clothing.id}>
                            {clothes.cost}
                        </li>
                    </div>
                </div>
            );
          } else {
            return null; // Don't render for non-women's items
          }
        })}
      </ul>
    </div>
  );
}
