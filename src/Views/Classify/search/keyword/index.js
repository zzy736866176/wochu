import React, { Component } from 'react'
import style from './index.module.scss'
class Keyword extends Component {
    state = {
        datalist:[]
    }
  render() {
    return (
      <div>
        {
            this.state.datalist.map((item,index)=>
            <div key={index} className={style.list}>
                <img src={item.picUrl} alt=""/>
                <p>{item.goodsName}</p>
                <h2>{item.description}</h2>
                {
                    item.price === item.marketPrice ? <h3>{item.price}</h3> : 
                    <div>
                        <h3>{item.price}</h3>
                        <h4>{item.marketPrice}</h4> 
                    </div>
                }
                
            </div>)
        }
      </div>
    )
  }
  componentWillReceiveProps(newState,newProps){
      fetch(`http://api9.wochu.cn/api/goods/searchbykeyword?orderId=0&pageIndex=1&pageSize=20&keyword=${newState.match.params.source}`).then(res=>res.json()).then(res=>{
          console.log(res.data)
          this.setState({
              
          },()=>{
              this.setState({
                datalist:res.data.items
              })
          })
      })
  }
}

export default Keyword
