import { Link, Navigate, Route, useParams } from "react-router-dom";
import App from './App';


function DogType({dogItem}){
    const params = useParams();
    let [dog] = dogItem.dogs.filter(v => {
        return v.name.toLowerCase() === params.name;
    });

    return(
        <div>
            <h1>{dog.name}</h1>
            <h3>{dog.name} is {dog.age} years old.</h3>
            <p>Facts about {dog.name}:</p>
            <ul>
                {dog.facts.map((v, i) => {
                    return (
                        <li key={i}>{v}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default DogType;