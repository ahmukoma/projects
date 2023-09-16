import { useState } from "react";

function NewBoxForm({setNewBox}){
    const INITIAL_STATE = {
        backgroundColor: "",
        width: "",
        height: "",
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    function createNewBox(e){
        e.preventDefault();
        
        if (formData.backgroundColor !== "" && formData.width > 0 && formData.height > 0){
            setNewBox(formData);
            setFormData(INITIAL_STATE);
        }
    }

    function valueChange(e){
        let {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    return (
        <form onSubmit={createNewBox} className="NewBoxForm">
            <label htmlFor="backgroundColor">Background color </label>
            <input
            type="text"
            placeholder="Background color"
            name="backgroundColor"
            id="backgroundColor"
            value={formData.backgroundColor}
            onChange={valueChange}
            /><br/>

            <label htmlFor="width">Width (px) </label>
            <input
            type="number"
            placeholder="Width"
            name="width"
            id="width"
            value={formData.width}
            onChange={valueChange}
            min={1}
            /><br/>

            <label htmlFor="height">Height (px) </label>
            <input
            type="number"
            placeholder="Height"
            name="height"
            id="height"
            value={formData.height}
            onChange={valueChange}
            min={1}
            /><br/>
            <br/>
            <button type="Submit">Create New Box</button>
            <br/>
            <br/>
        </form>
    )
}

export default NewBoxForm;