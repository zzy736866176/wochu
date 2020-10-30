import React, { Component } from 'react'

class Classify extends Component {
  state = {
    isShow : 0,
    number:undefined
  }
  static defaultProps = {
      items : []
    }
  static getDerivedStateFromProps (newProps){
    console.log(newProps)
    if(newProps.number){
      var arr = new Array(newProps.number).fill("").map((item,index)=>index)
      console.log(arr)
      return{
        number:arr
      }
    }else{
      return {}

    }
  }
  render() {
    return (
      <>
        <nav style={{display:'flex',justifyContent:'space-between'}}>
          {
            (this.state.number||this.props.items).map((item,index)=>{  
              return <div key={index} onClick={this.change.bind(this,index)}>{ item }</div>
            })
          }
        </nav>
        {
          (this.state.number||this.props.items).map((item,index)=>{
            return this.state.isShow === index ? 
            <div key={index} style={{backgroundColor:`#f00${index}`,height:'1rem',textAlign:'center',lineHeight:'1rem'}}>{ item }</div>
             : null
          })
        }
      </>
    )
  }

  change(index){
    console.log(this,index)
    this.setState({
      isShow:index
    })
  }
  
}

export default Classify

