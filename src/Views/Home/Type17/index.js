import React, { Component } from 'react'
import style from './index.module.scss'
import { withRouter } from 'react-router'

class Type17 extends Component {
  render() {
    return (
      <>
          {
            <div className={style.type17} onClick={this.toGoodsDetail.bind(this,this.props.data.items[0].source)}>
              <p><span>————</span> {this.props.data.title} <span>————</span></p>
              <div className={style.type17content}>
                <img src={this.props.data.items[0].imgUrl} alt=""/>
                <h1>{this.props.data.items[0].posDes}</h1>
                <h2>{this.props.data.items[0].description}</h2>
                {
                  this.props.data.items[0].marketPrice === this.props.data.items[0].price ? 
                  <h3>￥{this.props.data.items[0].price}</h3>:
                  <div>
                    <h3>￥{this.props.data.items[0].price} <span>&nbsp;￥{this.props.data.items[0].marketPrice}</span></h3>
                    
                  </div>
                } 
              </div>
            </div>
          }
      </>
    )
  }
  toGoodsDetail(source){
    this.props.history.push(`/goodsDetail/${source}`)
  }
}

export default withRouter(Type17)