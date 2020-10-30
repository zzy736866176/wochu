import { createStore } from 'redux'
const tabbarReducer = (prevState = false , action) =>{
    let {type,payload} = action
    let newState = {...prevState}
    switch(type){
        case 'ShowTabbar':
            newState.isTabbarShow = payload
            return newState
        case 'HideTabbar':
            newState.isTabbarShow = payload
            return newState
        default :
        return prevState
    }
}
const tabbarStore = createStore(tabbarReducer)
export default tabbarStore