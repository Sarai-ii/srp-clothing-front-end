import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../Css/EditClothing.css";

const API = process.env.REACT_APP_API_URL;

function EditClothing() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [clothes, setClothes] = useState({
    name: "",
    category: "",
    cost: "",
    in_stock: false,
    country: "",
    handwash_only: false, 
    material: "",
    created_on: "", 
    username: ""
  });

  const updateClothes = (updatedClothes) => {
    axios
      .put(`${API}/clothing/${id}`, updatedClothes)
      .then(
        () => {
          navigate(`/clothes/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setClothes({ ...clothes, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setClothes({ ...clothes, in_stock: !clothes.in_stock});
    setClothes({ ...clothes, handwash_only: !clothes.handwash_only});
  };

  useEffect(() => {
    axios.get(`${API}/clothing/${id}`).then(
      (response) => setClothes(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateClothes(clothes, id);
  };
  return (
    <div className="Edit" style={{ backgroundColor: "#f0dada" }}>
      <form onSubmit={handleSubmit} className="vertical-form">
        <div className="form-group">
          <fieldset>
            <legend>Basic Information</legend>
            <label htmlFor="name">Name of Clothing:</label>
              <input
                id="name"
                type="text"
                name="name"
                value={clothes.name}
                placeholder="E.g., Elegant Brown Loafers"
                className="wide-input" 
                onChange={handleTextChange}
                required
              />
              <label htmlFor="category">Category:</label>
              <input
                id="category"
                type="text"
                name="category"
                value={clothes.category}
                placeholder="Clothing Type"
                onChange={handleTextChange}
              />
              <label htmlFor="cost">Cost:</label>
              <input
                id="cost"
                type="number"
                value={clothes.cost}
                placeholder=""
                className="narrow-input" 
                onChange={handleTextChange}
                required
              />
              <label htmlFor="in_stock">In Stock</label>
                <input
                  id="in_stock"
                  type="checkbox"
                  onChange={() => handleCheckboxChange("in_stock")}
                  checked={clothes.in_stock}
                />
          </fieldset>
        </div>
          
        <div className="form-group">
          <fieldset>
          <legend>Additional Details</legend>
            <label htmlFor="country">Country of Manufacture:</label>
            <input
              id="country"
              type="text"
              value={clothes.country}
              placeholder=""
              onChange={handleTextChange}
            />
            <label htmlFor="material">Material:</label>
            <input
              id="material"
              type="text"
              value={clothes.material}
              placeholder="E.g., cotton, nylon, silk"
              onChange={handleTextChange}
            />
                        <label htmlFor="handwash_only">HandWash Only?</label>
            <input
              id="handwash_only"
              type="checkbox"
              onChange={() => handleCheckboxChange("handwash_only")}
              checked={clothes.handwash_only}
            />
            </fieldset>
            <fieldset>
            <label htmlFor="created_on">Original date entered in database:</label>
            <input
              id="created_on"
              type="text"
              value={clothes.created_on}
              placeholder=""
              onChange={handleTextChange}
            />
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={clothes.username}
              placeholder=""
              onChange={handleTextChange}
              required
            />

            <br />
            <button type="submit" className="rounded-button">Change Item in Database</button>
          </fieldset>
        </div>
      </form>
      
      <Link to={`/clothes/${id}`}>
        <button className="rounded-button-smaller">Never Mind!</button>
      </Link>
    </div>
  );
}

export default EditClothing;
