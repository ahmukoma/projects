import { useState } from "react";

function NewTodoForm({createTask}){
    let [task, setTask] = useState("");

    function createTodo(e){
        e.preventDefault();
        if(task.trim().length > 0){
            createTask(task);
            setTask("");
        }
    }

    function setNewValue(e){
        setTask(e.target.value)
    }

    return (
        <form onSubmit={createTodo}>
            <label htmlFor="todo">What to do? </label>
            <input
            type="text"
            placeholder="Write a new todo"
            name="todo"
            id="todo"
            value={task}
            onChange={setNewValue}/>
            <br/>
            <br/>
            <button type="submit">Add Task</button>
        </form>
    )
}

export default NewTodoForm;