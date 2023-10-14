import './DogDetails.css';
import { Link } from "react-router-dom";

function DogDetails({dog}){
    return(
        <div className="DogInfo">
            <h3>{dog.name}</h3>
            <h5>Age: {dog.age}</h5>
            <h1><Link to={`/dogs/${dog.src}`}>View dog</Link></h1>
        </div>
    )
}

export default DogDetails;