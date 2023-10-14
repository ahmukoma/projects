import { Link, Navigate, useParams } from "react-router-dom";
import './common.css';

function Color(){
    let c = useParams().color.split('-');
    let color = `rgb(${c[0]}, ${c[1]}, ${c[2]})`;

    let colorData = localStorage.getItem("colors") ? localStorage.getItem("colors").split(',').map((v) => {
        return v;
    }) : [];

    if (colorData.indexOf(useParams().color) < 0) return <Navigate to='/'/>

    return(
        <>
        <button><Link to='/colors'>Go home</Link></button>
        <div id="my-color" style={{backgroundColor: color}}>
            <div className="gradient" style={{backgroundImage: `linear-gradient(black, ${color})`}}></div>
        </div>
        </>
    )
}

export default Color;