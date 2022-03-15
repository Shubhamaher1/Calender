export default(state, action)=>{
    switch(action.type){
        case 'DELETE_TRANSATION':
            return{
                ...state,
                trangection: state.trangection.filter(trangection=>trangection.id!=action.payLoad),
            }
            break;
        case "ADD_TRANSATION":
            return{
                ...state,
                trangection: [action.payLoad,...state.trangection]
            }
        
        default:
            return state;
    }
}