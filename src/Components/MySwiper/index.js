import React from 'react'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

class MySwiper extends React.Component {
    static defaultProps = {
        myname:'zzy',
        loop:true,
        freeMode:false,
        spaceBetween:0,
        slidesPerView:1,
        isPagination:true,
        centeredSlides:false,
        autoplay:false
    }

    componentDidMount() {
        new Swiper('.'+this.props.myname, {
            pagination: this.props.isPagination?{
                el: '.swiper-pagination',
                clickable: true
            }:'',
            loop:this.props.loop,
            slidesPerView: this.props.slidesPerView,
            spaceBetween: this.props.spaceBetween,
            freeMode: this.props.freeMode,
            centeredSlides: this.props.centeredSlides,
            autoplay:this.props.autoplay
        });
    }

    render() {
        return <div>
            <div className={"swiper-container "+this.props.myname}>
                <div className="swiper-wrapper">
                    {
                        this.props.children
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    }
}

export default MySwiper
