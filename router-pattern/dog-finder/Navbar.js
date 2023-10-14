import { Link } from "react-router-dom";
import './DogDetails.css';

function Navbar({dogNames}){
    return(
        <div className="Navbar">
            <p className="link"><Link to='/dogs'>Dogs</Link></p>
            {dogNames.map((v, i) => {
                return <p key={i} className="link"><Link to={`/dogs/${v}`.toLocaleLowerCase()}>{v}</Link></p>
            })}
        </div>)
}

export default Navbar;