import { Link } from "react-router-dom";

function Soda(){
    return (
        <div className="drop">
            <h1>You have selected a Soda</h1>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default Soda;