import React, {useState} from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

function TodoList(){
    let [todos, setTodos] = useState([]);

    function createNewTask(task){
        setTodos([...todos, task]);
    }

    function removeTask(id){
        setTodos(todos.filter((v, i) => i !== id));
    }

    return(
        <>
        <NewTodoForm createTask = {createNewTask}/>
        {todos.map((v, i) => <Todo task={v} key={i} removeTask={removeTask} id={i}/>)}
        </>
    )
    
}

export default TodoList;