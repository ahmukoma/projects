import './Todo.css';

function Todo({task, removeTask, id}){
    return (
        <div className='Todo'>
            <h4 className='Todo-task'>{task}</h4>
            <button className='Todo-remove' onClick={() => removeTask(id)}>x</button>
        </div>
    )
}

export default Todo;