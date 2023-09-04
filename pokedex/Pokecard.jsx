import './pokecard.css';

function Pokecard(props){
    return (
        <div className='pokecard'>
            <h4 className='pokecard-title'>{props.name}</h4>
            <img src={props.imgLoc}/>
            <div className='pokecard-desc'>
                <span>Type: {props.type}</span>
                <br/>
                <span>EXP: {props.base_experience}</span>
            </div>
        </div>
    )
};

export default Pokecard;