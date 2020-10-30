import React, { Component } from 'react'
import MySwiper from '../../../Components/MySwiper'
import style from './index.module.scss'
import { withRouter } from 'react-router'
class Type13 extends Component {
  render() {
    return (
        <div className={style.type13}>
            <MySwiper loop={false} freeMode={true} slidesPerView={'3'} isPagination={false} myname={'type13'}>
                {
                    this.props.data.map((item,index)=>
                    <div key={this.props.data[index].posDes} className={'swiper-slide ' + style.type13content} onClick={this.toGoodsDetail.bind(this,this.props.data[index].source)}>
                        <img src={this.props.data[index].imgUrl} alt=""/>
                        <p>{this.props.data[index].goodsName}</p>
                        {
                            this.props.data[index].marketPrice === this.props.data[index].price ? <h3 style={{lineHeight:'.4rem'}}>￥{this.props.data[index].price}</h3> :
                            <div>
                                <h2>￥{this.props.data[index].marketPrice}</h2>
                                <h3>￥{this.props.data[index].price}</h3>
                            </div>
                        }
                    </div>)
                }
            </MySwiper>
        </div>
    )
  }
  toGoodsDetail(source){
      this.props.history.push(`/goodsDetail/${source}`)
  }
}

export default withRouter(Type13)
