import React from 'react';
import EmptyBoxIcon from '../../assets/image/EmptyBoxTodo.png';
import '../Info/Info.scss';

export default function Info({text,desc}) {



  return (
    <div className='Info__emptyBox'>
        <img src={EmptyBoxIcon} alt="EpmtyBox" />
        <h2>{text}</h2>
        <p>{desc}</p>
    </div>
  )
}
