const Person = (props) => {
    let msg = props.age > 18 ? "please go vote!" : "you must be 18";
    let localName = props.name.length > 8 ? props.name.slice(0, 6) : props.name;
    let localHobbies = props.hobbies === undefined ? [] : props.hobbies;
    
    return (
        <div>
        <h1>{localName}</h1>
        <p>Learn some information about this person</p>
        <h3>{msg}</h3>
        <ul>
            {localHobbies.map((v) => (<li>{v}</li>))}
        </ul>
        </div>
    )
}