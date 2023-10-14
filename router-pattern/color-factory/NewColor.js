import { useEffect, useState } from "react";
import { Navigate, Route, Link, useNavigate } from "react-router-dom";
import Colors from "./Colors";

function NewColor(){
    let [rgb, setRGB] = useState({
        r: 0,
        g: 0, 
        b: 0
    });

    function newColor(e){
        e.preventDefault();

        return <Navigate to='/'/>
    }

    function setVal(e){
        setRGB({...rgb, [e.target.name]: e.target.value})
    }

    return(
        <form className="new-color-form" onSubmit={newColor}>
            <input placeholder="R" type="number" min={0} max={255} onChange={setVal} name="r"/>
            <input placeholder="G" type="number" min={0} max={255} onChange={setVal} name="g"/>
            <input placeholder="B" type="number" min={0} max={255} onChange={setVal} name="b"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewColor;