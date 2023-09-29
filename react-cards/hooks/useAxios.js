import React, {useState} from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";

const useAxios = () => {
    const [data, updateData] = useState([]);

    async function changeData(url){
        if (!url) {
            updateData([]);
            return;
        }
        
        const response = await axios.get(url);

        updateData(data => ([...data, { ...response.data, id: uuid() }]));
    }

    return [data, changeData];
}

export default useAxios;