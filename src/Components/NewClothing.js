import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewClothing() {
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


  const addClothes = (newClothes) => {
    axios
      .post(`${API}/clothing`, newClothes)
      .then(
        () => {
          navigate(`/clothes`);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    addClothes(clothes);
  };

  useEffect(() => {
    axios.get(`${API}/clothing/${id}`).then(
      (response) => setClothes(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name of Clothing:</label>
        <input
          id="name"
          value={clothes.name}
          type="text"
          onChange={handleTextChange}
          placeholder=""
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
          onChange={handleTextChange}
          required
        />
         <label htmlFor="in_stock">Stock:</label>
        <input
          id="in_stock"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={clothes.in_stock}
        />
        <label htmlFor="country">Manufactured Country:</label>
        <input
          id="country"
          type="text"
          value={clothes.country}
          placeholder=""
          onChange={handleTextChange}
        />
        <label htmlFor="handwash_only">HandWash Only?:</label>
        <input
          id="handwash_only"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={clothes.handwash_only}
        />
        <label htmlFor="material">Material:</label>
        <input
          id="material"
          type="text"
          value={clothes.material}
          placeholder=""
          onChange={handleTextChange}
        />
       <label htmlFor="created_on">Manufactured Date:</label>
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
        <input type="submit" />

      </form>
      
      <Link to={`/clothes/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default NewClothing;
