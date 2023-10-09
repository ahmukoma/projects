import './VendingMachine.css';
import { BrowserRouter, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
import ChocolateBar from './ChocolateBar';
import Chips from './Chips';
import Cookies from './Cookies';
import Soda from './Soda';
import Snack from './Snack';
import NavBar from './NavBar';

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
                    <Route path='/soda' element={<Snack/>} />
                </Routes>
            </BrowserRouter>
            <div className='VendingMachine-snacks'>
                <div className=''>
                    <Snack name='Soda' amountLeft={7}/>
                    <Snack name='Chips' amountLeft={3}/>
                    <Snack name='Cookies' amountLeft={5}/>
                    <Snack name='Chocolate Bar' amountLeft={2}/>
                </div>
            </div>
        </div>
    )
}

export default VendingMachine;