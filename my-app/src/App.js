import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './pages/login'
import Home from './pages/home'
import Content from './pages/content';

// 引入antdesign样式
import 'antd/dist/antd.css';

import { HashRouter ,Route,Switch,withRouter } from 'react-router-dom';

// react-redux相关
import { Provider } from "react-redux";
import store from "../src/redux/store/store";
import Demoa from '../src/pages/demoa'
import Demob from '../src/pages/demob'



class App extends React.Component{
  constructor(){
    super();
    this.state={status:false}
  }
  componentWillMount(){

  }
  render(){
    return (
      <Provider store={store}>
        <Content></Content>
        
      </Provider>
    );
  }

}

export default App;
