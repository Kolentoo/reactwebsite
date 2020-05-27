import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

import {Consumer} from './parent'

class Grandson extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="grand-son">
        grand-son  Portals  功能测试
      </div>
    );

  }
}


export default Grandson;