import checkIcon from '../images/icon-check.svg';
import deleteIcon from '../images/icon-cross.svg';

interface ListElementProps {
  name: string;
  id: number;
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
  isDone: boolean;
}

export default function ListElement({ name, id, onDelete, onDone, isDone }: ListElementProps) {
  return (
    <li>
      <span className="list-element-span">
        <button
        className="check-button"
        onClick={() => onDone(id)}
        >
          <img src={checkIcon} alt="check" />
        </button>

        <span className={`list-text ${isDone ? "task-done" : "task-not-done"}`} >{name}</span>

        <button 
          className="delete-button" 
          onClick={() => onDelete(id)}
        >
          <img src={deleteIcon} alt="delete" />
        </button>
      </span>
    </li>
  );
}
