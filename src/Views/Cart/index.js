import React, { Component } from 'react'
import style from './index.module.scss'
class Cart extends Component {
  state={
    titlelist:['名称','单价','数量','总价','操作'],
    list:[1,2],
    unitPrice:[10,20],
    goodsnumValue:[],
    totalPrice:[]
  }
  render() {
    return (
      <div>
        <span>全选</span><input type="checkbox"></input>
        <ul className={style.titlelist}>
          {
            this.state.titlelist.map((item,index)=><li key={index}>{item}</li>)
          }
        </ul>
        <ul>
          {
            this.state.list.map((item,index)=>
            <li key={index}>        
              <p><input type="checkbox"/>商品{this.state.list[index]}</p>
              <p>￥{this.state.unitPrice[index]}</p>
              <p>
                <button onClick={this.reduce.bind(this,index)}>-</button>
                <input style={{width:'.2rem'}} value={ this.state.goodsnumValue.length } onChange={this.change.bind(this)}></input>
                <button onClick={this.add.bind(this,index)}>+</button>
              </p>
              <p>￥{ this.state.unitPrice[index] * this.state.goodsnumValue.length }</p>
              <p>删除</p>
            </li>
            )
          }
          {/* <li>
            <p><input type="checkbox"/>商品2</p>
            <p>￥20</p>
            <p>
              <button>-</button>
              <input style={{width:'.1rem'}}></input>
              <button>+</button>
            </p>
            <p>￥40</p>
            <p>删除</p>
          </li> */}
        </ul>

        <h1>总计:</h1> 
      </div>
    )
  }

  componentDidMount(){
      console.log(this.refs)
      console.log(this.state.goodsnumValue)
  }
  componentDidUpdate(){
    console.log(this.state.goodsnumValue)
  }
  change(){

  }
  reduce(index){
    console.log(index)
    console.log(this.state.goodsnumValue)
    this.setState({
      goodsnumValue: this.state.goodsnumValue.splice(this.state.goodsnumValue.length,1)
    })
  }
  add(index){
    console.log(index)
    console.log(this.state.goodsnumValue)
    this.setState({
      goodsnumValue:[...this.state.goodsnumValue,this.state.unitPrice[index]]
    })
  }
  
}

export default Cart