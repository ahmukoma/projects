import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Colors(){
    let colorData = localStorage.getItem("colors") ? localStorage.getItem("colors").split(',').map((v) => {
        return v;
    }) : [];

    let [colors, setColors] = useState(colorData);

    let INIT_RGB = {
        r: 0,
        g: 0, 
        b: 0
    };

    let [rgb, setRGB] = useState(INIT_RGB);

    function newColor(e){
        e.preventDefault();

        setColors([`${rgb.r}-${rgb.g}-${rgb.b}`, ...colors,]);
        setRGB(INIT_RGB);
        toggleForm();
    }

    function setVal(e){
        setRGB({...rgb, [e.target.name]: e.target.value})
    }

    function toggleForm(){
        let target = document.getElementById("new-col-form");
        target.style.display = target.style.display === "block" ? "none" : "block";
    }

    useEffect(() => {
        localStorage.setItem("colors", colors);
    }, [colors])

    return(
        <div>
            <p></p>
            <button onClick={toggleForm}>Add new color</button>
            <form className="new-color-form" onSubmit={newColor} id="new-col-form" style={{display: "none"}}>
                <input placeholder="R" type="number" min={0} max={255} onChange={setVal} name="r" value={rgb.r}/>
                <input placeholder="G" type="number" min={0} max={255} onChange={setVal} name="g" value={rgb.g}/>
                <input placeholder="B" type="number" min={0} max={255} onChange={setVal} name="b" value={rgb.b}/>
            <button type="submit">Submit</button>
        </form>
            <br/>
            {colors.map((v, i) => {
                let col = v.split('-');
                return (
                    <button className="col-link" key={i} style={{backgroundColor: `rgb(${col[0]}, ${col[1]}, ${col[2]})`}}>
                        <Link to={`/colors/${v}`} className="palette">{v}</Link>
                    </button>
                )
            })}
        </div>
    )
}

export default Colors;