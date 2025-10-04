// this component takes in a todo and returns a list element with it
import ListElement from "./ListElement"
import { useState } from "react";

import addIcon from '../images/add-con.svg'

interface Task {
    name: string;
    id: number;
    isDone: boolean;
  };
  
interface AddTodoProps {
    className: string;
};

export default function AddTodo(props: AddTodoProps) {

    const [taskArray, setTaskArray] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>("");
    const [error, setError] = useState<boolean>(false);

    const handleDelete = (id: number) => {
        setTaskArray(currentTodos => currentTodos.filter(todo => todo.id !== id));
      };

    const handleDone = (id: number) => {
        setTaskArray(currentTodos =>
            currentTodos.map(todo =>
              todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
          );
    };

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setNewTask(value);
    
        // simple validation
        if (value.length > 30) {
            setError(true);
        } else {
            setError(false);
        }
    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (newTask.trim() === "" || error) return;

        const task: Task = {
            name: newTask.trim(),
            id: Date.now(),
            isDone: false

        };

        setTaskArray(prevTasks => [...prevTasks, task]);
        setNewTask("");
    };

    return (
        <>
            <form onSubmit={handleSubmit} action="" className={`addtodo-form ${props.className}`}>
                <button type="submit"><img src={addIcon} alt="" /></button>
                <input type="text"
                    placeholder="Create a new todo..."
                    onChange={handleInput}
                    value={newTask}
                    
                />
            </form>
            <span className="error-msg" >{error ? "Task should be shorter." : ""}</span>
            <br />
            <br />
            <br />

            {taskArray.map(task => {
                return <ListElement
                    name={task.name}
                    key={task.id}
                    id={task.id}
                    onDelete={handleDelete}
                    onDone={handleDone}
                    isDone={task.isDone}
                />
            })}
            
        </>
    );
};