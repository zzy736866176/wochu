import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import style from './index.module.scss'
class Tabbar extends Component {
  render() {
    return (
      <ul className={style.tabbar}>
        <li><NavLink activeClassName={style.active} to="/home">首页</NavLink></li>
        <li><NavLink activeClassName={style.active} to="/classify">分类</NavLink></li>
        <li><NavLink activeClassName={style.active} to="/cart">购物车</NavLink></li>
      </ul>
    )
  }
}

export default Tabbar
