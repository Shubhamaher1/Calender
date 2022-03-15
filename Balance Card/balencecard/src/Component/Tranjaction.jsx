import React,{useState, useContext} from 'react';
import { GlobalContext } from '../Context/GlobelState';

export const Tranjaction = () => {
    const [text,setText]=useState("");
    const [Amount,setAmount]=useState(0);
    const {addTraction}= useContext(GlobalContext);
    const onSubmit=e=>{
        e.preventDefault();
        const newTrasition={
            id:Math.floor(Math.random()*10000000),
            text,
            amount:+Amount,
        }
        addTraction(newTrasition);
        setText("");
        setAmount(0);
    }

  return (
    <>
    <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" id="amount" value={Amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn" type='submit'>Add transaction</button>
      </form>
    </>
  )
}