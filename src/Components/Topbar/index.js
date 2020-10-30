import React, { Component } from 'react'
import style from './index.module.scss'
class Topbar extends Component {
  render() {
    return (
      <div className={style.topbar}>
        <img src='http://wmall.wochu.cn/h5/home/vueimg/wochuLogo.png' alt=""/>
        <p>请填写地址</p>
      </div>
    )
  }
}

export default Topbar
