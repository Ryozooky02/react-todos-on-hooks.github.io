import React, { useContext, useState } from 'react';
import Task from '../Task/Task';
import '../Tasks/Tasks.scss';
import PlusIcon from '../../assets/svg/toAddIcon.svg';
import DeleteIcon from '../../assets/svg/deleteIcon.svg';
import ChangeIcon from '../../assets/svg/changeIcon.svg';
import Info from '../Info/Info';
import axios from 'axios';
import { AppContext } from '../App/App';

export default function Tasks() {

    const { tasks,onAddTask,onDeleteTask } = useContext(AppContext);
    const [inputValue, setInputValue] = useState('');




    const hundleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post('http://localhost:3001/tasks', 
            {text: inputValue, completed: false})

            if (response.status) {
                if (inputValue.trim() !== '') {
                    onAddTask(response.data);
                    setInputValue('');
                }
            }
        } catch (error) {
            console.error(error);
        }
    }


  return (
    <div className='Task_main'>
        <div className="Task__input">
            <form onSubmit={hundleSubmit}>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder='Добавить задачу'/>
                <button type='submit'>
                    <img src={PlusIcon} alt="Добавить" />
                </button>
            </form>
        </div>
        <label>
            <div className="Task__list">
                {tasks.length > 0 ? <> {tasks.map((item) => (
                   <div className='Task__item'
                        key={item.id}>
                            <label>
                                <Task 
                                    {...item} />
                                <div className="Task__btns">
                                    <button>
                                        <img src={ChangeIcon} alt="Изменить" />
                                    </button>
                                    <button onClick={() => onDeleteTask(item.id)}>
                                        <img src={DeleteIcon} alt="Удалить" />
                                    </button>
                                </div>
                            </label>
                   </div>
                ))} </> : <Info 
                    text="Задач нет!" 
                    desc="Добавьте новую задачу..."
                    />}
                
            </div>
        </label>
    </div>
  )
}


