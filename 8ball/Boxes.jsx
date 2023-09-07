import './Boxes.css';
import ChildBoxes from './ChildBoxes';
import Colors from './Colors';

const Boxes = () => {
    function randomizeColor(parent, clName){
        const children = parent.querySelectorAll(clName);
        let randIndex = Math.floor(Math.random() * children.length);
        
        children[randIndex].style.backgroundColor = Colors.getSingleColor();
    }

    return(
        <div className='Boxes'>
            <div id='children'>
                <ChildBoxes count={16}/>
            </div>
            <button onClick={() => randomizeColor(document.querySelector("#children"), '.box')}>Change</button>
        </div>
    )
}

export default Boxes;