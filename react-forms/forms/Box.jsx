import { useState } from "react";
import "./Box.css";

const Box = ({bgColor, width, height, deleteBox, boxId}) => {
    return (
        <div className="Box">
            <div style={{backgroundColor: bgColor, width: `${width}px`, height: `${height}px`}}>

            </div>
            <button className="Box-delete" onClick={() => deleteBox(boxId)}>X</button>
        </div>
    )
}

export default Box;