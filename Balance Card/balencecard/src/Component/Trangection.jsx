import React,{useContext} from 'react';
import { GlobalContext } from '../Context/GlobelState';
// import { useContext } from 'react';

export const Trangection = ({trangection}) => {
    const {deleteTraction}= useContext(GlobalContext);

    const sign = trangection.amount<0 ?"-":"+";
  return (
    <div>
        <li className={sign=="-"? "minus":"plus"}>
        {trangection.text}<span>{trangection.amount}</span>
        <button className='delete-btn' onClick={()=>deleteTraction(trangection.id)}>X</button>
    </li>
    </div>
  )
}