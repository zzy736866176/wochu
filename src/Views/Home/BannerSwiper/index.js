import React, { Component } from 'react'
import MySwiper from '../../../Components/MySwiper'
import style from './index.module.scss'
class BannerSwiper extends Component {
    state = {
        datalist:[],
        recommendedContent1:[],
        recommendedContent2:[]
    }
  render() {
    return (
      <div>
        <div className={style.bannerSwiper}>
            <MySwiper key={this.state.datalist.length} autoplay={true} mayname={'bannerSwiper'}>
                {
                    this.state.datalist.map(item =><div className="swiper-slide" key={item.sortIndex}><img style={{height:'1.65rem'}} src={item.picUrl} alt={item.title}/></div>)
                }
            </MySwiper>
        </div>
        <div style={{backgroundColor:'white',paddingTop:'.1rem'}}>
          <ul style={{display:'flex',marginTop:'.1rem'}}>
              {
                this.state.recommendedContent1.map(item=><li style={{flex:1}} key={item.posDes}><img style={{height:'.85rem'}} src={item.imgUrl} alt={item.sortIndex}/></li>)
              }
          </ul>
          <ul style={{display:'flex',marginTop:'.2rem',paddingBottom:'.2rem'}}>
              {
                this.state.recommendedContent2.map(item=><li style={{flex:1}} key={item.posDes}><img style={{height:'.85rem'}} src={item.imgUrl} alt={item.sortIndex}/></li>)
              }
          </ul>
        </div>
      </div>
    )
  }
  componentDidMount(){
    fetch('http://api9.wochu.cn/client/v1/app/layoutamend?parameters=%7B%22version%22:%2210.0.0%22,%22source%22:%22H%22%7D').then(res=>res.json()).then(res=>{
      this.setState({
            datalist:res.data.carousel,
            recommendedContent1:res.data.recommendedContent[0].items,
            recommendedContent2:res.data.recommendedContent[1].items
        })
    })
  }
}

export default BannerSwiper
