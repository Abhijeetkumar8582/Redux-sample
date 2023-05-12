const initialValue = 0 

const amount =(state=initialValue,action)=>{
    if (action.type == 'increment'){
        return state + action.payload
    }
    else if (action.type == 'decrement'){
        return state - action.payload
    }
    else {
        return state
    }
}

export default amount;