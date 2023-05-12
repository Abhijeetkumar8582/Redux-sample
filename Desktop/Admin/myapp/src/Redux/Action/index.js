export const Increment = (amount = 0) => {
    return {
        type: "increment",
        payload: amount
    }
}

export const Decrement = (amount = 0) => {
    return {
        type: "decrement",
        payload: amount
    }
}

export const displayText = ()=>{
    return {
        type: 'displayText'
    }
}