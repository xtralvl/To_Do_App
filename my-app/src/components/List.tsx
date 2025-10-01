import { use, useState } from 'react';

interface ListProp {
    todo: string;
};

import listImageCheck from '../assets/images/icon-check.svg'
import listImageCross from '../assets/images/icon-cross.svg'

export default function List(props: ListProp) {

    const [done, setDone] = useState(false);

    const handleDone = () => setDone(!done);


    return (
        <li className="list-element" >
            <button onClick={handleDone} className='list-button' id='check-button' ><img src={listImageCheck} alt="" /></button>
            <span className={done ? "done" : ""} >{props.todo}</span>
            <button className='list-button' id='cross-button' ><img src={listImageCross} alt="" /></button>
        </li>
    )
}