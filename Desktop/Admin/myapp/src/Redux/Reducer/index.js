import {combineReducers} from 'redux'
import amount from './Counter'
import  displayText  from './DisplayTes'


const reducer = combineReducers({
    counter : amount,
    displayTest:displayText
})
export default reducer