//DEPENDENCIES
import axios from "axios";
import { useState, useEffect } from "react";
//COMPONENTS
import Clothing from "./Clothing";
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
    <div className="clothes">
        <main>
            <h3>New This Season</h3>
            <table>
            <thead>
                <tr>
                    <th>Fav</th>
                    <th>Songs</th>
                    <th>Artist</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                {clothing.map((clothes) => <Clothing key={clothes.clothing_id} clothes={clothes} /> )}
            </tbody>
        </table>
      </main>
    </div>
  );
}

