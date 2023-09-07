import { useState } from 'react';
import './Eightball.css';
import Colors from './Colors';

const  Eightball = ({answers}) => {
    const initState = {
        msg: "Think of a question",
        color: "black"
    }

    const [random, changeRandom] = useState(answers[Math.floor(Math.random() * answers.length)]);
    const  [randAnswer, changeAnswer] = useState(initState);

    const [recordKeeper, updateRecords] = useState({});

    function update(){
        changeRandom(answers[Math.floor(Math.random() * answers.length)])
        changeAnswer(random);

        //recordKeeper[random.msg] = recordKeeper[random.msg] === undefined ? 1 : recordKeeper[random.msg] + 1;
        recordKeeper[random.color] = recordKeeper[random.color] === undefined ? 1 : recordKeeper[random.color] + 1;

        Colors.setColors(recordKeeper);
        updateRecords(recordKeeper);
        updateColors();
    }

    function reset(){
        changeAnswer(initState);
        updateRecords({});
        Colors.setColors();

        document.querySelector("#Eightball-colors").innerHTML = "";
    }

    function updateColors(){
        const colors = document.querySelector("#Eightball-colors");
        colors.innerHTML = "";
        
        for(let record in recordKeeper){
            colors.innerHTML += `<li style='color: ${record}'>${record}: ${recordKeeper[record]}</li>`;
        }
    }

    return (
    <div className='Eightball'>
        <div className="Eightball-ball" onClick={update} style={{backgroundColor: randAnswer.color}}>
            <h2>{randAnswer.msg}</h2>
        </div>
        <button className='Eightball-reset' onClick={reset}>Reset</button>
        <ul id='Eightball-colors'>
        </ul>
    </div>
    )
}

export default Eightball;