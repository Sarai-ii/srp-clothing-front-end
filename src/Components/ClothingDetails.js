import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Css/Show.css";

const API = process.env.REACT_APP_API_URL;

function ClothingDetails() {
  const [clothing, setClothing] = useState([]);
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);
  const [showProductDetails, setShowProductDetails] = useState(true);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/clothing/${id}`)
      .then((res) => setClothing(res.data))
      .catch((c) =>
        console.error(
          "The get functionality of this code is not working. Make sure to check the API and if the URL pathway is correct."
        )
      );
  }, [id, navigate]);

  const deleteClothing = () => {
    axios
      .delete(`${API}/clothing/${id}`)
      .then(() => navigate(`/new-this-season`))
      .catch((c) => console.error("catch", c));
  };

  const toggleDetails = () => {
    setShowProductDetails(!showProductDetails);
  };
  const showConfirmationModal = () => {
    console.log("working modal");
    setIsConfirmationVisible(true);
  };

  const hideConfirmationModal = () => {
    console.log("hiding modal");
    setIsConfirmationVisible(false);
  };

  const handleDelete = () => {
    deleteClothing();
    hideConfirmationModal();
  };

  return (
    <div className="">
      <article className="show card card-details text-center bg-dark grey">
        <div className="row">
          <div className="col details-left ">
            {/* Image on the left */}
            <img
              src={clothing.image}
              className="details-img card-img-top product-shot"
              alt={clothing.name}
            />
          </div>
          <div className="col">

            {/* Content on the right */}
            <div className="details-right card-body">
              <div className="details-body">
                <h6>{clothing.clothing_id}</h6>
                <h4>{clothing.name}</h4>
                <h6>${clothing.cost}</h6>
                <button className=" details-btn btn btn-default">Place in Cart</button>
                <ul className="details-body">
                  <h5>Find in Store</h5>
                  <h5 className="details-body" onClick={toggleDetails}>Product Details</h5>
                  {showProductDetails && (
                    <ul className="details-body" >PRODUCT CARE 
                    <li>{clothing.handwash_only ? 
                      <span className="details-body" >
                        <svg xmlns="" width="26" height="26" fill="#f0dada" class="bi bi-badge-wc-fill" viewBox="0 0 16 16">
                          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11.666 1.89c.682 0 1.139.47 1.187 1.107H14v-.11c-.053-1.187-1.024-2-2.342-2-1.604 0-2.518 1.05-2.518 2.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.742c0-1.112.488-1.754 1.318-1.754zm-6.188.926h.044L6.542 11h1.006L9 5.001H7.818l-.82 4.355h-.056L5.97 5.001h-.94l-.972 4.355h-.053l-.827-4.355H2L3.452 11h1.005l1.02-4.184z"/>
                        </svg> Handwash Only
                    </span> : null} 
                    </li>
                    <li>Avoid contact with hand cream, hand sanitizer, make-up and perfume.</li>
                    <li>For any enquiries about your product, please do not hesitate to contact ant Sen Extravaganza.</li>
                    <h6>This reference is Made in {clothing.country}</h6>
                    <ul className="details-body">MATERIALS
                      <li>
                        {clothing.material}
                      </li>
                    </ul>
                  </ul>
                )}
                <h5>Delivery & Return</h5>
                </ul>
              </div>
              <div className="showNavigation">
                <div className="">
                  {" "}
                  <Link to={`/new-this-season`}>
                    <button className="btn btn-outline-secondary button-details">
                      Back
                    </button>
                  </Link>
                </div>
                <div>
                  <Link to={`/clothes/${id}/edit`}>
                    <button className="btn btn-outline-secondary button-details">
                      Edit
                    </button>
                  </Link>
                </div>
                <div className="">
                  <button
                    className="btn btn-outline-secondary button-details "
                    onClick={showConfirmationModal}
                  >
                    Delete
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
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ClothingDetails;
