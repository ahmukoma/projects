import { BrowserRouter, Link, Navigate, Route, Router, Routes } from "react-router-dom";

function Snack({name, amountLeft}){
    return (
        <div className="Snack">
            <h3>{name}</h3>
            <h4>Remaining: {amountLeft}</h4>
        </div>
    )
}

export default Snack;