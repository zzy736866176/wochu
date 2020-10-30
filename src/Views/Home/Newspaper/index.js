import React, { Component } from 'react'
import { Accordion, List } from 'antd-mobile';
class Newspaper extends Component {
    state = {
        datalist:this.props.data
    }
  render() {
    return (
      <div>
        <Accordion accordion openAnimation={{}} className="my-accordion" onChange={this.onChange}>
          <Accordion.Panel header={this.state.datalist ? <div style={{fontSize:'.12rem'}}>{this.state.datalist[0].items[0].title}</div> : null}>
            <List className="my-list">
              <List.Item>
                {
                    this.state.datalist ? <div style={{fontSize:'.12rem'}}>{this.state.datalist[0].items[1].title}</div> : null
                }
              </List.Item>
              <List.Item>
                {/* {
                    this.state.datalist ? <div style={{fontSize:'.12rem'}}>{this.state.datalist[0].items[2].title}</div> : null
                } */}
              </List.Item>
            </List>
          </Accordion.Panel>
        </Accordion>
      </div>
    )
  }
  componentDidMount(){
    this.setState({
        
    },()=>{

    })
  }
}

export default Newspaper
