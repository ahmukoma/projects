import { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList (){
    const [boxes, setBoxes] = useState([]);

    function setNewBox(newBox){
        setBoxes([...boxes, {...newBox, id: Math.floor(Math.random() * 999999) }]);
    }

    function deleteBox(boxId){
        setBoxes(boxes.filter((b, i) => b.id !== boxId));
    }

    return(
        <>
        <NewBoxForm setNewBox = {setNewBox}/>
        {boxes.map(({backgroundColor, width, height, id}) => (
            <Box
            bgColor={backgroundColor}
            width={width}
            height={height}
            key={id}
            boxId={id}
            deleteBox={deleteBox}/>
        ))}
        </>
    )
}

export default BoxList;