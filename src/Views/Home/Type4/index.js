import React, { Component } from 'react'
import { withRouter } from 'react-router'
class Type4 extends Component {

  render() {
    return (
      <div>
          {
            <img style={{width:'100%'}} src={this.props.data.imgUrl} alt="" onClick={this.toNewActivityTemplate.bind(this,this.props.data.source)}/>
          }
      </div>
    )
  }
  toNewActivityTemplate(source){
    if(source.match('activityPagew')){
     return this.props.history.push(`/activityPagew/${source.slice(-3)}`)
    }
    this.props.history.push(`/newActivityTemplate/${source.slice(-3)}`)
  }
}

export default withRouter(Type4) 
