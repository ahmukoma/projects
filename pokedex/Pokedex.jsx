import Pokecard from "./Pokecard";

function Pokedex({items}){
    return (
        <>
            {items.map((v) => (
            <Pokecard key = {v.id}
                name = {v.name}
                imgLoc = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${v.id}.png`}
                type = {v.type}
                base_experience = {v.base_experience}/>
                )
                )
            }
        </>
    )
};

export default Pokedex;