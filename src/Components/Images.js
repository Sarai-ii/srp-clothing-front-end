import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Clothes from "./Clothes";

const API = process.env.REACT_APP_API_URL;

export default function Images() {
  const [images, setImages] = useState([]);
  let { id } = useParams();
// console.log(images)

  useEffect(() => {
      axios.get(`${API}/clothing/${id}/images`)
      .then((response) => {
        // console.log(`${API}`) //SHOWING THE CORRECT LOCALHOST, ISSUE MUST BE WITH THE FURTHER PATHS
        // // API/CLOTHING - WORKS (RETURNS CLOTHING TABLE)
        // // API/CLOTHING/:${id} - DOESN'T WORK BECAUSE THERE'S NO SPECIFIED ID (RETURNS CLOTHING TABLE)
        // // API/CLOTHING/23/ -  WORKS WHEN A NUMBER IS MANUALLY INSERTED
        // THE PROMISE NOW WORKS AND PASSES DOWN THE ARRAY ASSOCIATE WITH THE SPECIFIED ID
        // console.log(response.data);
        setImages(response.data);
      })
      .catch((error) => console.error("Error with fetching images:", error))
  }, [id]);

    return (
        <div>
            {console.log(images)}
            {/* {images.map((image) => (
                //   console.log(image)//passes down each image associated with the inputted id
                <Clothes image={image} />
            ))} */}
            <Clothes images={images}/>
        </div>
    )
}
