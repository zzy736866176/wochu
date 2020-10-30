import React, { Component } from 'react'
import style from './index.module.scss'
import { withRouter } from 'react-router'
import store from '../../Redux'
class ActivityPagew extends Component {
  state = {
    datalist:[]
  }
  render() {
    return (
      <div className={style.all}>
        {
          this.state.datalist.map(item=>{
            if(item.shelveList !== null){
              return item.shelveList.map(i=>
                <div onClick={this.toDetail.bind(this,i.goodsGuid)} className={item.shelveList.length % 3 === 0 ? style.odd : style.even} key={i.id}>
                    <img src={i.icon} alt=""/>
                    <p>{ i.goodsName }</p>
                    {
                      i.marketPrice === i.price ? <h2 style={{lineHeight:'.6rem',color:'orangered',height:'.4rem'}}>￥{ i.price }</h2> : <div><h2>￥{ i.marketPrice }</h2><h3>￥{ i.price }</h3></div>
                    }
                    
                </div>)
            }
            return <img key={item.aId} style={{width:'100%'}} src={item.imageUrl} alt=""/>
          })
        }       
      </div>
    )
  }

  toDetail(source){
    this.props.history.push(`/goodsDetail/${source}`)
  }

  componentDidMount(){
    store.dispatch({
      type:'HideTabbar',
      payload:false
    })
    fetch(`https://wmall.wochu.cn/client/v1/goods/activityTemplate?parameters=%7B%22aTId%22%3A${this.props.match.params.source}%7D`).then(res=>res.json()).then(res=>{
      this.setState({
        datalist:res.data.areaList
      })
    })
  }
  componentWillUnmount(){
    store.dispatch({
      type:'ShowTabbar',
      payload:true
    })
  }
}

export default withRouter(ActivityPagew)
