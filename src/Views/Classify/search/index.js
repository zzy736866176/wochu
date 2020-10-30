import React, { Component } from 'react'
import { withRouter } from 'react-router'
class Search extends Component {
  render() {
    return (
      <div>
        <input ref='input' type="text"/>
        <p onClick={()=>this.props.history.push(`/classify/search/keyword/${this.refs.input.value}`)}>搜索</p>
      </div>
    )
  }
}

export default withRouter(Search)
