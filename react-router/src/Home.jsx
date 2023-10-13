import { Link } from "react-router-dom";
import Snack from "./Snack";
function Home(){
    return(
        <div className='VendingMachine-snacks'>
                <div className='links'>
                    <Link to='/soda'><Snack name='Soda' amountLeft={7}/></Link>
                    <Link to='/chips'><Snack name='Chips' amountLeft={3}/></Link>
                    <Link to='/cookies'><Snack name='Cookies' amountLeft={5}/></Link>
                    <Link to='/chocolatebar'><Snack name='Chocolate Bar' amountLeft={2}/></Link>
                </div>
            </div>
    )
}

export default Home;