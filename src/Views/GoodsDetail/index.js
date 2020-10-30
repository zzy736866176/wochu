import React, { Component } from 'react'
import style from './index.module.scss'
import MySwiper from '../../Components/MySwiper'
import store from '../../Redux'
import Axios from 'axios';
class GoodsDetail extends Component {
    state = {
        datalist: null,
        looplist: []
    }
  render() {
    return (
      <div>
        <div onClick={this.back} className={style.back}>&lt;</div>
        {
            this.state.datalist ? 
            <div>
              <MySwiper isPagination={false} loop={false}>
                {
                  this.state.looplist.map((item,index)=><div key={index} className={'swiper-slide'}><img style={{width:'100%'}} src={item.picUrl} alt=""/></div>)
                }
              </MySwiper>
              <div className={style.title}>
                <p>{this.state.datalist.goodsName}</p>
                <h2>￥{this.state.datalist.price}  <span> ￥{this.state.datalist.marketPrice}</span></h2>
              </div>
              <img style={{width:'100%',marginBottom:'.2rem'}} src={'http://wmall.wochu.cn/h5/mall/img/vueimg/navigation.png'} alt=""/>
              <div className={style.des} dangerouslySetInnerHTML={{ __html: this.state.datalist.descriptionDetail }}></div>
            </div>
            :null
        }
      </div>
    )
  }
  back = () =>{
    this.props.history.goBack()
  }
  componentWillUnmount(){
    store.dispatch({
      type:'ShowTabbar',
      payload:true
    })
  }
  componentDidMount(){

    // if(store.getState().list.length === 0){
    //   Axios()
    // }else{
    //   this.setState({
    //     datalist: store.getState().list
    //   })
    // }



    store.dispatch({
      type:'HideTabbar',
      payload:false
    })
      fetch(`http://api9.wochu.cn/api/goods/goods/detail?goodsGuid=${this.props.match.params.source}`).then(res=>res.json()).then(res=>{
          this.setState({
              datalist:res.data
          })
      })

      fetch(`http://api9.wochu.cn/client/v1/goods/imgLoopList?parameters=%7B%22goodsGuid%22:%22${this.props.match.params.source}%22%7D`).then(res=>res.json()).then(res=>{

          this.setState({
            looplist:res.data
          })
      })
  }
}

export default GoodsDetail
