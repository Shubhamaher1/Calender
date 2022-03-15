import React,{useContext} from 'react';
import { GlobalContext } from '../Context/GlobelState';

export const Balance = () => {
  const {trangection}= useContext(GlobalContext);
  const amount = trangection.map(trangection=>trangection.amount);
  const total = amount.reduce((acc,itm)=>(acc+=itm),0).toFixed(2);
  return (
    <>
    <h2>Your Balance </h2>
    <h1 id='balance'>RS:{total}</h1>
    </>
    
  )
}