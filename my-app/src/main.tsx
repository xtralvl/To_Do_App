import { createRoot } from "react-dom/client";
import App from './App'
import './styles/Header.scss'
import './styles/index.scss'
import './styles/AddNewTodo.scss';
import './styles/List.scss'

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);