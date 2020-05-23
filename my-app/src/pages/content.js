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
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


class ContentBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            status:store.getState(),
            authority:localStorage.setItem('authority','off')
        }
    }
    render(){
        let authority = localStorage.getItem('authority');
        console.log(authority)
        return(
            <div className="content">

            {
                authority!=='off'?            
                <Layout>
                    <Sider><SiderBar></SiderBar></Sider>
                    <Layout>
                        <Header><HeadBar></HeadBar></Header>
                        <Content><RouteBox></RouteBox></Content>
                    </Layout>
                </Layout>:<RouteBox></RouteBox>
                // <HashRouter>
                //     <Switch>
                //         <Route>
                //             <Login/>
                //         </Route>
                //     </Switch>
                // </HashRouter>
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
export default  connect(mapStateToProps)(ContentBox);
