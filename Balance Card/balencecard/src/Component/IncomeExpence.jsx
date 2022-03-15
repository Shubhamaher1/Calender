import React,{useContext} from 'react';
import { GlobalContext } from '../Context/GlobelState';
export const IncomeExpence = () => {
  const {trangection}= useContext(GlobalContext);
  const amount = trangection.map(trangection=>trangection.amount);
  const income = amount.filter(itm=>itm>0).reduce((acc,itm)=>(acc+=itm),0).toFixed(2);
  const expance = amount.filter(itm=>itm<0).reduce((acc,itm)=>(acc+=itm),0).toFixed(2);
  return (
    <div className='inc-exp-container'>
        <div>
        <h4>Income</h4>
        <p className='money plus' id='money-plus'>{income}</p>
        </div>
        <div>
        <h4>Expense</h4>
        <p className='money minus' id='money-minus'>{expance}</p>
        </div>
    </div>
  )
}