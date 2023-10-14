import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import DogList from './DogList';
import DogDetails from "./DogDetails";

function Dogs({allDogs}){

    return(
    <div>
        <h1>Dogs</h1>
        {allDogs.map((v, i) => {
            return <DogDetails dog={v} key={i}/>
        })}
    </div>)
}

export default Dogs;