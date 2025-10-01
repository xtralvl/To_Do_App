import React, { useState } from "react";
import List from "./List";

// this component renders a new li for every todo that is added

export default function AddNewTodo() {

    const [todos, setTodos] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = ((e : React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim() === "") return;

        setTodos(prevTodos => [inputValue, ...prevTodos]);
        setInputValue("");
    });

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
                {todos.map((todo, i) => {
                    return (
                        <List 
                            key={`todo_${i}`}
                            todo={todo}
                        />
                    )
                })}
            </ul>
        </div>
    )
}