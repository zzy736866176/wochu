import { createStore } from 'redux'
const listReducer = (prevState=[],action) =>{
    let {type,payload} = action
    let newState = [...prevState]
    switch(type){
        case 'addList':
            newState = [...newState,...payload]
        return newState
        default :
        return newState
    }
}
const listStore = createStore(listReducer)
export default listStore