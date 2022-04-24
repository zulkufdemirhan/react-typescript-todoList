import  { FunctionComponent } from 'react'
import { ITask } from '../typeoftodo';

interface Todo {
    task:ITask
    deleteBtn(TaskDeleteBtn:string):void;
}
const TodoComp : FunctionComponent<Todo>=({task,deleteBtn}:Todo) => {
return (
    <div className="task">
    <div className="content">
        <span>{task.taskname}</span>
        <span>{task.deadline}</span>
    </div>
    <button
    onClick={() => {
        deleteBtn(task.taskname);
        }}
    >
        X
    </button>
    </div>
    );
}
export default TodoComp;
