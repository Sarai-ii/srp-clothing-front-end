import { Link } from "react-router-dom";

export default function Clothing({ clothes }) {
  return (
    <div>

    <tr>
      <td>
      <Link to={`/clothes/${clothes.clothing_id}`}>{clothes.name}</Link>
      </td>
      <td>
      <Link to={`/clothes/${clothes.clothing_id}`}>{clothes.cost}</Link>
      </td>
      {/* <td>
        <Link to={`/clothing/${clothing.clothes_id}`}>{clothing.name}</Link>
      </td> */}
    </tr>
    </div>
  );
}


