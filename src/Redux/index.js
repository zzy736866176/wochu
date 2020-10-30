import { createStore } from 'redux'
import { fromJS } from 'immutable'

const reducer = (prevState={
    isTabbarShow : false
},action)=>{
    let {type,payload} = action
    // let newState = {...prevState}
    let newState = fromJS(prevState)
    switch(type){
        case 'ShowTabbar':
            // newState.isTabbarShow = payload
            newState = newState.setIn(['isTabbarShow'],payload)
        return newState.toJS()
        case 'HideTabbar':
            // newState.isTabbarShow = payload
            newState = newState.setIn(['isTabbarShow'],payload)
        return newState.toJS()
        default :
        return prevState
    }
}
const store = createStore(reducer)
export default store