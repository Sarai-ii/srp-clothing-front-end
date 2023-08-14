//DEPENDENCIES
import axios from "axios";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//COMPONENTS
// import Clothing from "./Clothing";
// import Images from "./Images";
import SideBar from "./Sidebar"
// import Women from "../Pages/Women"

// STYLING
import "../Css/New-This-Season.css"
//DATABASE
const API = process.env.REACT_APP_API_URL;


export default function Clothes() {
  const [clothing, setClothing] = useState([]);

  
  useEffect(() => {
    axios
    .get(`${API}/clothing`)
    .then((response) => setClothing(response.data))
    .catch((c) => console.warn("catch", c));
  }, []);
  
  

  return (
    <div className="main-container">
      <SideBar 
      clothing={clothing}
      />        
      <section className="section">
        <h5>New This Season</h5>
      </section>
      <main className="container">
        <div className="row">
        {clothing.map((clothes) => 
            <div className="col-md-2 card-container">
              <main className="card">
                <Link to={`/clothes/${clothes.clothing_id}`}>
                  <img src={clothes.image} className="card-img-top product-shot" alt={clothes.name}/>
                </Link>
                  <div className="card-body">
                  <p className="card-text">
                    <Link className="product-name" to={`/clothes/${clothes.clothing_id}`}>{clothes.name}</Link>
                  </p>
                  <p key={clothes.clothing_id} className="card-text">${clothes.cost}</p>          
                </div>
              </main>
            </div>       
          )}
        </div>
      </main>
    </div>
  );
}

