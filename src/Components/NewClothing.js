import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../Css/NewClothing.css";

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
            navigate(`/new-this-season`);
            },
            (error) => console.error(error)
        ).catch((c) => console.warn("catch", c));
    };

    const handleTextChange = (event) => {
        setClothes({ ...clothes, [event.target.id]: event.target.value });
    };


    const handleCheckboxChange = (field) => {
        setClothes({ ...clothes, [field]: !clothes[field] });
    };
    


    const handleSubmit = (event) => {
        event.preventDefault();
        addClothes(clothes);
    };

    useEffect(() => {
        axios.get(`${API}/clothing`).then(
        (response) => setClothes(response.data),
        () => navigate(`/not-found`)
        );
    }, [id, navigate]);

    return (
        <div className="New">   
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
                            onChange={handleTextChange}
                            className="wide-input" 
                            required
                            />
                            <p></p>
                            <label htmlFor="category">Category:</label>
                            <input
                            id="category"
                            type="text"
                            name="category"
                            value={clothes.category}
                            placeholder="Clothing Type"
                            onChange={handleTextChange}
                            />
                            <p></p>
                            <label htmlFor="cost">Cost:</label>
                            <input
                            id="cost"
                            type="number"
                            value={clothes.cost}
                            placeholder=""
                            onChange={handleTextChange}
                            className="narrow-input" 
                            required
                            />
                    </fieldset>
                    <fieldset>
                        <legend>Additional Details</legend>
                            <label htmlFor="in_stock">In Stock?</label>
                            <input
                            id="in_stock"
                            type="checkbox"
                            onChange={() => handleCheckboxChange("in_stock")}
                            checked={clothes.in_stock}
                            />
                            <p> </p>
                            <label htmlFor="country">Country of Manufacture:</label>
                            <input
                            id="country"
                            type="text"
                            value={clothes.country}
                            placeholder=""
                            onChange={handleTextChange}
                            />
                            <p> </p>
                            <label htmlFor="handwash_only">HandWash Only?</label>
                            <input
                            id="handwash_only"
                            type="checkbox"
                            onChange={() => handleCheckboxChange("handwash_only")}
                            checked={clothes.handwash_only}
                            />
                            <p> </p>
                            <label htmlFor="material">Material:</label>
                            <input
                            id="material"
                            type="text"
                            value={clothes.material}
                            placeholder="E.g., cotton, nylon, silk"
                            onChange={handleTextChange}
                            />
                            <p> </p>
                            <label htmlFor="created_on">Date entered in database:</label>
                            <input
                            id="created_on"
                            type="date"
                            value={clothes.created_on}
                            placeholder=""
                            onChange={handleTextChange}
                            />
                            <p> </p>
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
                        </fieldset>
                    </div>
            </form>
            <Link to={`/new-this-season`}><button>Nevermind!</button></Link>
        </div>
    );
}

export default NewClothing;
