import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dogs from './Dogs';
import DogDetails from './DogList';
import Navbar from './Navbar';

let defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: 'whiskey',
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: 'duke',
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: 'perry',
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: 'tubby',
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

function App() {
  const dogNames = defaultProps.dogs.map(v => {
    return v.name;
  });

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar dogNames={dogNames}/>
            <Routes>
                <Route path="/" element={<Dogs allDogs={defaultProps.dogs}/>}/>
                <Route path="/dogs" element={<Dogs allDogs={defaultProps.dogs}/>}/>
                <Route path="/dogs/:name" element={<DogDetails dogItem={defaultProps}/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
