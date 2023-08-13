//DEPENDENCIES
import axios from "axios";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
//COMPONENTS
import Clothing from "./Clothing";
// import Images from "./Images";
import SideBar from "./Sidebar"
// STYLING
import "../Css/New-This-Season.css"
//DATABASE
const API = process.env.REACT_APP_API_URL;


export default function Clothes({images}) {
  const [clothing, setClothing] = useState([]);
  // console.log(images)

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

        </section>
        <main className="main-section">
          <h5>New This Season</h5>
          {clothing.map((clothes) => <Clothing key={clothes.clothing_id} clothes={clothes} images={images}/> )}
      </main>
    </div>
  );
}

