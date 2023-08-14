//DEPENDENCIES
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//DATABASE
const API = process.env.REACT_APP_API_URL;
export default function Men() {
    const [clothing, setClothing] = useState([]);

    useEffect(() => {
        axios
          .get(`${API}/clothing`)
          .then((response) => setClothing(response.data))
          .catch((c) => console.warn("catch", c));
      }, []);

  return (
    <div>
      <h1>Men's Clothing</h1>
      <ul>
        {clothing.map((clothes) => {
          // Check if the category is "mens"
          if (clothes.category.includes("mens-")) {
            return (
                <div className="card">
                    <div className="card-body">
                        <Link to={`/clothes/${clothes.clothing_id}`}>
                            <img src={clothes.image} className="card-img-top product-shot" alt={clothes.name}/>
                        </Link>
                        <p className="card-text">
                            <Link className="product-name" to={`/clothes/${clothes.clothing_id}`}>{clothes.name}</Link>
                        </p>
                        <li className="card-text" key={clothing.id}>
                            {clothes.cost}
                        </li>
                    </div>
                </div>
            );
          } else {
            return null
          }
        })}
      </ul>
    </div>
  );
}
