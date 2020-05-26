import React from 'react';
import '../css/styles.css'

// 路由
import RouteBox from '../router/route'
import { HashRouter ,Route,Switch,withRouter } from 'react-router-dom';
import Router from '../router/route';

// react-redux
import {connect} from 'react-redux';
import store from '../redux/store/store'

// 组件
import SiderBar from '../../src/components/sider';
import HeadBar from '../../src/components/headbar';
import Login from '../../src/pages/login';
import LayoutBox from '../../src/pages/layout';



class Content extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        console.log(this.props)
        return(
            <div className="content">
            {
                this.props.showLayout?        
                <HashRouter>
                    <Route>
                        <LayoutBox></LayoutBox>
                    </Route>
                </HashRouter>:<RouteBox></RouteBox>
            }
            </div>
        )
    }
}

// react-redux相关
const mapStateToProps = state => {
    console.log('app',state);
    return state;
  }

// connect 加强 redux相关
export default  connect(mapStateToProps)(Content);
