import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";

//intial state
const intialState={
    trangection: [
        // {id:1,text:"Flower",amount:-20},
        // {id:2,text:"wer",amount:-90},
        // {id:3,text:"Flow",amount:20},
]
}
//create context
export const GlobalContext = createContext(intialState);

//provider componet
export const GlobalProvider=({children})=>{
    const[state,dispatch]=useReducer(AppReducer,intialState);

    //Action delete add 
    function deleteTraction(id){
        dispatch({
            type:"DELETE_TRANSATION",
            payLoad:id
        })
    }
    function addTraction(trangection){
        dispatch({
            type:"ADD_TRANSATION",
            payLoad:trangection
        })
    }
    return(<GlobalContext.Provider value={{
        trangection:state.trangection,
        deleteTraction,
        addTraction
    }}>
        {children}
    </GlobalContext.Provider>)
}