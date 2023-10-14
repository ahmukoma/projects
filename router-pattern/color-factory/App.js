import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Colors from './Colors';
import Color from './Color';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
            <Routes>
                <Route path="/" element={<Colors/>}/>
                <Route path="/colors" element={<Colors/>}/>
                <Route path="/colors/:color" element={<Color/>}/>
                <Route path="*" element={<Color/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
