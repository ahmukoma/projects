import Box from './Box';

const ChildBoxes = ({count}) => {
    let boxes = [];
    for(let i = 0; i < count; i++){
        boxes.push(Box);
    }

    return boxes;
}

export default ChildBoxes;