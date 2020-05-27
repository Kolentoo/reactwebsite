import React,{Component} from 'react';
import { Button } from 'antd';

import {Consumer} from './parent'
import Son from './son'

class Children extends Component{
  constructor(props){
    super(props)
    this.state={
      childrenValue:100
    }
  }
  render(){
    return(
      
        <Consumer>
            {( name ) =>
              <div className="children">
                <p>从父组件传递过来的数据：{this.props.passValue}</p>
                <p>子组件。获取父组件的context的值:{name}</p>
                <Son></Son>
                <Button ></Button>
                <Button  type="primary" onClick={()=>{this.props.changeData(this.state.childrenValue)}}>修改父组件的值</Button>
              </div>
            }
        </Consumer>

      
    )
  }
}


export default Children;