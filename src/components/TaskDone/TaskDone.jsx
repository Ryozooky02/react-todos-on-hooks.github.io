import React, { useContext } from 'react';
import '../TaskDone/TaskDone.scss';
import { AppContext } from '../App/App';

export default function TaskDone() {

  const {taskIsDone} = useContext(AppContext);

  return (
    <div className='TaskDone'>
        <h2 className='TaskDone__title'>Сделанные задачи:</h2>
        <div className="TaskDone__list">
            {taskIsDone.map((item) => (
              <label>
                <li key={item.id}>{item.text}</li>
              </label>
            ))}
        </div>
    </div>
  )
}
