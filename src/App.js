import React, { Component } from 'react'
import Tabbar from './Components/Tabbar';
import store from './Redux';

class App extends Component {
  state = {
    isShow : true
  }
  render() {
    return (
      <div>
        {
          this.props.children
        }
        {
          this.state.isShow ? <Tabbar/> : null
        }
        
      </div>
    )
  }

  componentDidMount(){
    store.subscribe(()=>{
      this.setState({
        isShow:store.getState().isTabbarShow
      })
    })
  }
}

export default App;
