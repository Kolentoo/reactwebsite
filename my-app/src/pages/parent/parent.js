import React,{Component} from 'react';
import Children from './children';
import Grandson from './grandson';
import Son from './son';
import { Button } from 'antd';
import PropTypes from 'prop-types';

// context的使用，在多层嵌套组件的情况下从父级往下传递值，并且多深都可以传递，不需要每次都通过props
// 创建一个上下文的容器(组件), defaultValue可以设置共享的默认数据
export const {Provider, Consumer} = React.createContext('默认值');

class Parent extends Component{
  constructor(props){
    super(props)
    this.state={
      parentValue:0,
      parentData:'父组件的初始数据',
      name:111111
    }
  }
  getRefs=()=>{
    // 可以获取当前节点
    console.log(this.refs.parent)
  }
  render(){
    return(
      <React.Fragment>
        <Provider value="测试数据">
          <div className="parent" ref="parent">
            <p>{this.state.name}</p>
            父组件的值：{this.state.parentValue}
            
            <Children passValue={this.state.parentData} changeData={e=>this.changeValue(e)}></Children>
            <Button className="block" type="default" onClick={this.resetValue}>恢复父组件的值</Button>
            <Button onClick={this.getRefs}>获取refs测试</Button>
            <p>1.父传子：通过props向下传递</p>
            <p>2.子传父：父组件绑定属性值，值为一个箭头函数传递一个方法给子组件，子组件传参数调用父组件的方法</p>
            <p>3.通过context传值：</p>
            <p>1️⃣createContext创建</p>
            <p>2️⃣使用Provider包裹标签</p>
            <Grandson></Grandson>
            
          </div>
        </Provider>
      </React.Fragment>

    )
  }
  changeValue=(e)=>{
    console.log(e)
    this.setState({
      parentValue:e
    })
  }
  resetValue=()=>{
    this.setState({
      parentValue:0
    })
  }
}

Parent.propTypes = {
  name: PropTypes.string
};


export default Parent;