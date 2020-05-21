import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './pages/login'
import Home from './pages/home'

// 引入antdesign样式
import 'antd/dist/antd.css';
import {
  Route
} from 'react-router-dom'

import RouterMap from './router/route';
import Sider from '../src/components/sider';



class App extends React.Component{
  constructor(){
    super();
    this.state={status:false}
  }
  componentWillMount(){

  }
  render(){
    return (
      <div className="app">
        {this.state.status?<Sider></Sider>:''}
        <RouterMap sideBar={this.state.status}></RouterMap>
      </div>
    );
  }

}

export default App;
