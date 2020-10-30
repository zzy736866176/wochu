import React, { Component } from 'react'
import style from './index.module.scss'
import store from '../../Redux'
class NewActivityTemplate extends Component {
  state={
    datalist:[]
  }
  render() {
    return (
      <div className={style.all}>
        {
          this.state.datalist.map(item=>
          {
            if(item.shelveList !== null){
            return item.shelveList.map(i=>
            <div className={item.shelveList.length % 3 === 0 ? style.odd : style.even} key={i.id}>
                <img src={i.icon} alt=""/>
                <p>{ i.goodsName }</p>
                {
                  i.marketPrice === i.price ? <h2 style={{lineHeight:'.6rem',color:'orangered',height:'.4rem'}}>￥{ i.price }</h2> : <div><h2>￥{ i.marketPrice }</h2><h3>￥{ i.price }</h3></div>
                }
                
              </div>)
            }
          return <img key={item.areaName} style={{width:'100%'}} src={item.imageUrl} alt=""/>
          }  
        )
      }
      </div>
    )
  }
  componentDidMount(){
    store.dispatch({
      type:'HideTabbar',
      payload:false
    })
      fetch(`https://api9.wochu.cn/client/v1/goods/newactivityTemplate?aTId=${this.props.match.params.source}`).then(res=>res.json()).then(res=>{
          this.setState({
            datalist:res.data.areaList
          })
      })
  }
  componentWillUnmount() {
    store.dispatch({
      type:'ShowTabbar',
      payload:true
    })
  this.setState = (state, callback) => {
    return
  }
}
}

export default NewActivityTemplate
