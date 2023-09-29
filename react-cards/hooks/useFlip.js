import React, {useState} from "react";

const useFlip = (initflip) => {
    const [isFlipped, setIsFlipped] = useState(initflip);

    function flip(){
        setIsFlipped(flipped => !flipped);
    }
    
    return [isFlipped, flip];
}

export default useFlip;