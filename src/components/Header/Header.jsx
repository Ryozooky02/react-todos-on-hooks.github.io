import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.scss';

export default function Header() {

  const [isOpenArchive, setIsOpenArchive] = useState(false);

  const IsOpenArchive = () => {
    setIsOpenArchive(!isOpenArchive)
  }

  return (
    <div className='Header'>
        <div className="Header__title">
            <h1>Задачи</h1>
            <div className="Header__buttons">
                { isOpenArchive ? 
                <Link to='/'>
                  <button onClick={IsOpenArchive}>Вернуться</button>
                </Link> : <Link to='/done'>
                    <button onClick={IsOpenArchive}
                        className='Header__done'>Архив задач</button>
                </Link>}
            </div>
      </div>
    </div>
  )
}
