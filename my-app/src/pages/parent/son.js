import React,{Component} from 'react';
import { Button } from 'antd';
import {Consumer} from './parent'


class Son extends Component{
  constructor(props,context){
    super(props)
    this.state={
      sonValue:'哈哈哈'
    }
  }
  render(){
    return(
        
        <Consumer>
          {( name ) => 
              <div className="children">
                <p>孙子组件所获得的context数据：{name}</p>
              </div>
          }
        </Consumer>
        
    )
  }
}


export default Son;