import React, { useContext, useState } from 'react';
import '../Task/Task.scss';
import { AppContext } from '../App/App';


export default function Task({text,id,completed}) {

    const {onAddTask} = useContext(AppContext);
    const [isChecked, setIsChecked] = useState(false);


    const itemObj = {id, text, completed};
    
    const handleCheckBoxChange = () => {
        onAddTask(itemObj)
        setIsChecked(!isChecked);
    }



  return (
    <div className='Task'>
                <label>
                    <input 
                        type="checkbox"
                        onChange={handleCheckBoxChange}
                        checked={isChecked}/>
                    <span style={{textDecoration: isChecked ? 'line-through' : 'none'}}>
                        {text}
                    </span>
                </label>
    </div>
  )
}
