import React, { Component } from 'react'
import style from './index.module.scss'
class Type16 extends Component {
  render() {
    return (
      <div className={style.type16}>
        {this.props.data.items.map(item=><img key={item.posDes} src={item.imgUrl} alt=""/>)}
      </div>
    )
  }
}

export default Type16
