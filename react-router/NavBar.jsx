import {Link} from 'react-router-dom';
import './VendingMachine.css';

function NavBar(){
    return(
        <nav>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/chips'>Chips</Link></li>
                <li><Link to='/cookies'>Cookies</Link></li>
                <li><Link to='/soda'>Soda</Link></li>
                <li><Link to='/chocolatebar'>ChocolateBar</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;