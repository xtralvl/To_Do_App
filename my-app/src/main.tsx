import { createRoot } from "react-dom/client";
import App from './App';

import './styles/App.scss';
import './styles/AddTodo.scss';
import './styles/ListElement.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);