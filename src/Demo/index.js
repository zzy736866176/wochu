import React, { Component } from 'react'
import Axios from 'axios';

class Demo extends Component {
    state={
        isShow: false,
        search:[],
        list: []
    }
  render() {
    return (
      <div>
        <input onBlur={this.onblur.bind(this)} ref="myinput" type="text"/>
        <button onClick={this.research.bind(this)}>搜索</button>
        <table>
            <thead>
                <tr>
                    <td>
                        姓名
                    </td>
                    <td>
                        年龄
                    </td>
                    <td>
                        地址
                    </td>
                    <td>
                        电话
                    </td>
                </tr>
            </thead>

            {
            <tbody>
                    {
                        this.state.list.map((item,index)=>{
                            var isTrue = false
                            console.log(item)
                            for(var i in item){
                                console.log(i)
                                if(item[i] === this.state.search){
                                    isTrue = true;
                                    break;
                                }else{
                                    isTrue = false
                                }
                            }
                            return isTrue ? <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.addr}</td>
                                <td>{item.tel}</td>
                               </tr> : null
                        })
                    }
            </tbody>
        }
        </table>
      </div>
    )
  }
  onblur(){
    this.setState({
        search: [...this.state.search,this.refs.myinput.value]
    },()=>{
        console.log(this.state.search)
    })
    this.refs.myinput.value = ''
  }
  research(){
      this.setState({
          search:this.state.search.pop()
      },()=>{
          console.log(this.state.search)
      })
  }
  componentDidMount(){
      Axios('/demo.json').then(res=>{
          console.log(res.data.data.acts)
          this.setState({
            list:res.data.data.acts
          },()=>{
              this.setState({
                  
              })
              console.log(this.state.list)
          })
      })
  } 
}

export default Demo
