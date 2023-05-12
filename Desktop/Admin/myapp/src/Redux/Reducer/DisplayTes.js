const initialValue = 'black'

const displayText =(state=initialValue,action)=>{
    if(action.type=='displayText'){
        return state = 'blue'
    }
    else{
        return state
    }
}

export default displayText;