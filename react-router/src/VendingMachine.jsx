import './VendingMachine.css';
import { BrowserRouter, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import ChocolateBar from './ChocolateBar';
import Chips from './Chips';
import Cookies from './Cookies';
import Soda from './Soda';
import Snack from './Snack';
import NavBar from './NavBar';
import Home from './Home';

const VendingMachine = () => {
    return (
        <div className='VendingMachine'>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/chocolatebar' element={<ChocolateBar/>} />
                    <Route path='/chips' element={<Chips/>} />
                    <Route path='/cookies' element={<Cookies/>} />
                    <Route path='/soda' element={<Soda/>} />
                    <Route path='/home' element={<Home/>} />
                    <Route path='/' element={<Home/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine;