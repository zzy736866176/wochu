import React, { Component } from 'react'
import BannerSwiper from './BannerSwiper'
import Newspaper from './Newspaper'
import Type4 from './Type4';
import Type17 from './Type17';
import Type13 from './Type13';
import Type16 from './Type16';
import Type7 from './Type7';
import Topbar from '../../Components/Topbar';

class Home extends Component {
  state={
    alldatalist:[],
    type4:[]
  }
  render() {
    return (
      <div>
        <Topbar/>
        <BannerSwiper/>     
        {
          this.state.alldatalist.length ? <Newspaper data={this.state.alldatalist}/> : []
        }
        {
          (this.state.alldatalist).map(item=>{
            if(item.templateType === '4'){
              return <Type4 key={item.sortIndex} data={item.items[0]}/>
            }
            if(item.templateType === '17'){
              return <Type17 key={item.sortIndex} data={item}/>
            }
            if(item.templateType === '13'){
              return <Type13 key={item.sortIndex} data={item.items}/>
            }
            if(item.templateType === '16'){
              return <Type16 key={item.sortIndex} data={item} />
            }
            if(item.templateType === '7'){
              return <Type7 key={item.sortIndex} data={item}/>
            }
            return ''
          })
        }
      </div>
    )
  }

  componentDidMount(){
    fetch('http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H').then(res=>res.json()).then(res=>{
      this.setState({
        alldatalist:res.data.acts,
        type4:res.data.acts.filter(data=>data.templateType==='4')
      },()=>{

      })
    })
  }

  static getDerivedStateFromProps(newprops,newstate){
    return {
      newprops : '111'
    }
  }
  getSnapshotBeforeUpdate(c){
    return c
  }
  componentDidUpdate(a,b,c){
    console.log(a,c)
  }
}

export default Home
