// this components renders the background style the title and darkmode state and it returns the addtodo, listelements and filter as a child

import AddTodo from './components/AddTodo';
import Filter from './components/Filter';

import { useState } from 'react';

import sunIcon from '../src/images/icon-sun.svg';
import moonIcon from '../src/images/icon-moon.svg';

export default function App() {

    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(prev => {
          const newValue = !prev;
    
          if (newValue) {
            document.body.classList.add("body-dark");
          } else {
            document.body.classList.remove("body-dark");
          }
    
          return newValue;
        });
      };


    return (
        <>
            <header className={darkMode ? 'header-dark' : "header-light"}>
                <h1>TODO</h1>
                <button className='themeButton' onClick={toggleDarkMode}><img src={darkMode ? sunIcon : moonIcon} alt="" /></button>
            </header>
            <AddTodo 
                className={darkMode ? "addtodo-dark" : "addtodo-light"}
            />
            <Filter />
        </>
    )
}