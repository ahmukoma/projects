import { Link } from "react-router-dom";

function Cookies(){
    return (
        <div className="drop">
            <h1>Have some cookies!</h1>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default Cookies;