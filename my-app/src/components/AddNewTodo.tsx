import React, { useState } from "react";
import List from "./List";

interface Todo {
    id: number;
    text: string;
};

export default function AddNewTodo() {

    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [nextId, setNextId] = useState(1);

    const handleSubmit = ((e : React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() === "") return;
        setInputValue("")

        const newTodo: Todo = {id: nextId, text: inputValue};
        setTodos(prev => [newTodo, ...prev]);
        setNextId(prev => prev + 1);
        
    });

    const handleDelete = (idToDelete: number) => {
        setTodos(prevtodos => prevtodos.filter(todo => todo.id !== idToDelete));
    };

    return (
        <div className="app-container" >
            <form action="" onSubmit={handleSubmit}>
                <button className="add-todo-button" type="submit" >Add</button>
                <input
                type="text"
                placeholder="Create a new todo..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
            </form>

            <ul>
                {todos.map((todo) => {
                    return (
                        <List 
                            key={todo.id}
                            todo={todo}
                            onDelete={handleDelete}
                        />
                    )
                })}
            </ul>
        </div>
    )
}