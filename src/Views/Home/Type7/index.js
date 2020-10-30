import React, { Component } from 'react'
import style from './index.module.scss'
import { withRouter } from 'react-router'
class Type7 extends Component {
  render() {
    return (
      <div className={style.type7}>
        {this.props.data.items.map(item=>
        <div key={item.posDes} className={style.type7content} onClick={this.toGoodsDetail.bind(this,item.source)}>
          <img key={item.posDes} src={item.imgUrl} alt=""/>
          <h1>{item.goodsName}</h1>
          {
            item.price === item.marketPrice ? <h2 style={{lineHeight:'.4rem'}}>￥{item.price}</h2> : 
          <div>
            <h3>￥{item.marketPrice}</h3>
            <h2>￥{item.price}</h2>
          </div>
          }
        </div>
          )}
      </div>
    )
  }
  toGoodsDetail(source){
    this.props.history.push(`/goodsDetail/${source}`)
}
}

export default withRouter(Type7)
