import { Link } from "react-router-dom";
// import Images from "./Images";

export default function Clothing({ clothes }) {
  console.log(clothes.clothing_id)
  // console.log(images)
  return (
    <div>
      <main className="card">
        <img src="../Photos/ankle-boots.jpg" className="card-img-top" alt="Item"/>
        <Link to={`/clothes/${clothes.clothing_id}`}>{clothes.name}</Link>
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </main>
    </div>
  );
}


