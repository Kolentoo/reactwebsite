import React from 'react';
import RouteConfig from '../router/routeconfig'//路由配置文件
import {renderRoutes} from 'react-router-config';//路由配置安装的插件
import Router from '../router/route';
import {connect} from 'react-redux';

import Sider from '../../src/components/sider';

class Content extends React.Component{
    constructor(){
        super();
    }
    render(){
        console.log('content',this.props)
        return(
            <div className="content">
                {this.props.showSideBar?<Sider></Sider>:''}
                <Router></Router>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('app',state);
    return state;
  }
  
export default connect(mapStateToProps)(Content);