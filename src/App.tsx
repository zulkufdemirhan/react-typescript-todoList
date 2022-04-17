import { ChangeEvent, FunctionComponent, useState } from "react"
import { ITask } from "./typeoftodo";
import './App.css';
import TodoComp from "./components/TodoComp";



const App: FunctionComponent=() => {
  const [task,setTask]=useState<string>("");
  const [deadline,setDeadline]=useState<number>(0)
  const [todoList, setTodoList]=useState<ITask[]>([]);

  const inputMarker = (e:ChangeEvent<HTMLInputElement>) : void =>{
        if(e.target.name === "task"){
          setTask(e.target.value);
        }else{
          setDeadline(Number(e.target.value))
        }
  }

  const addBtn = () : void =>{
    const newTask = {taskname:task , deadline:deadline}
    setTodoList([...todoList,newTask]);
    setTask("");
    setDeadline(0);
  }

  const deleteBtn = (TaskDeleteBtn:string):void =>{
      setTodoList(
        todoList.filter((task)=>{
          return task.taskname != TaskDeleteBtn;
        })
      )
  }
  return (
    <div className='App'>
        <div className='header'>
            <div className='inputContainer'>
                  <input type="text" placeholder='task' name="task" value={task} onChange={inputMarker} />
                  <input type="number" placeholder='Deadline (in Days)...' name="deadline" value={deadline} onChange={inputMarker} />
            </div>
            <button onClick={addBtn}>Add Task</button>
        </div>
        <div className='todoList'>
          {todoList.map((task:ITask,key:number)=>{
            return <TodoComp key={key} task={task} deleteBtn={deleteBtn}/>
          })}
        </div>
    </div>
  )
}

export default App;


