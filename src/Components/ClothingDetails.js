// PACKAGES AND REACT DEPENDENCIES

import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

//STYLING
import "../Css/Show.css"

const API = process.env.REACT_APP_API_URL;

function ClothingDetails() {

  const [clothing, setClothing] = useState([]);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
    .get(`${API}/clothing/${id}`)
    .then((res) => setClothing(res.data))
    .catch((c) => console.error("The get functionality of this code is not working. Make sure to check the API and if the url pathway is correct."));
  }, [id, navigate]);

  const deleteClothing = () => {
    axios
      .delete(`${API}/clothing/${id}`)
      .then(() => navigate(`/new-this-season`))
      .catch((c) => console.error("catch", c));
  };

  const showConfirmationModal = () => {
    console.log("working modal")
    setIsConfirmationVisible(true);
  };

  const hideConfirmationModal = () => {
    console.log("hiding modal")
    setIsConfirmationVisible(false);
  };


  const handleDelete = () => {
    deleteClothing();
    hideConfirmationModal();
  };

  return (
    <div className="">
      <article className="card card-details text-center bg-dark grey ">
        <h4>{clothing.name}</h4>
        <h6>${clothing.cost}</h6>
        <div className="showNavigation">
          <div className="">
            {" "}
            <Link to={`/new-this-season`}>
              <button className="btn btn-outline-secondary button-details">Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/clothes/${id}/edit`}>
              <button className="btn btn-outline-secondary button-details">Edit</button>
            </Link>
          </div>
          <div className="">
            <button
              className="btn btn-outline-secondary button-details "
              onClick={showConfirmationModal}>Delete
            </button>
            {isConfirmationVisible && (
               <div className="modal">
               <div className="modal-content">
                 <p>Are you sure you want to delete?</p>
                 <button onClick={handleDelete}>Yes, Delete</button>
                 <button onClick={hideConfirmationModal}>Cancel</button>
               </div>
             </div>
           )}
          </div>
        </div>
      </article>
    </div>
  );
}
export default ClothingDetails;