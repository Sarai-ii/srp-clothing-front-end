//DEPENDENCIES
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
          // Check if the category is "women, had to change the ending from "womens" to "women" because I'm using .includes."
          if (clothes.category.includes("women")) {
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
