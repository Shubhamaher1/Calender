import React,{useContext} from 'react';
import { GlobalContext } from '../Context/GlobelState';
import { Trangection } from './Trangection';

export const List = () => {
  const {trangection}= useContext(GlobalContext);
  
  return (
    <>
    <h3>History</h3>
    <ul id='list' className='list'>
      {trangection.map(trangection=>(
        <Trangection key={trangection.id} trangection={trangection}/>
  ))}
        
    </ul>
    </>
  )
}