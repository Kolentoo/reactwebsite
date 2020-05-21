import React from 'react';
import logo from '../../src/logo.svg';
import '../../src/App.css';

import { RocketOutlined,UserOutlined } from '@ant-design/icons';
import { Button,Input,message } from 'antd';




class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userName:'',
            password:''
        }
    }
    render(){
        return(
            <div className="login">
                <div className="login-con">
                    <div className="logo-box">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                        
                    <div className="input-box">
                        <div className="input-list">
                            <Input ref="userName" placeholder="请输入用户名" size="large" prefix={<UserOutlined />} defaultValue={this.state.userName} onChange={this.listenUser}/>
                        
                        <div className="input-list"></div>
                            <Input ref="psaaword" placeholder="请输入密码" size="large" prefix={<RocketOutlined />} defaultValue={this.state.password} onChange={this.listenPassword} />
                        </div>
                    </div>

                    <Button type="primary" className="login" block size="large" onClick={this.checkValue}>登 录</Button>
                </div>
            </div>
        )
    }
    checkValue = () => {
        if(this.state.userName){
            console.log(this.state.password.lengh)
            if(this.state.password&&this.state.password.length>=6){
                this.props.history.push('home');
                message.info('登录成功');
            }else if(this.state.password&&this.state.password.length<6){
                message.info('密码强度不够');
            }else{
                message.info('请输入密码');
            }
        }else{
            message.info('请输入用户名');
        }
    }
    listenUser = (e) => {
        // 监听input userName
        console.log(e.target.value);
        this.setState({
            userName:e.target.value
        })

    }
    listenPassword = (e) => {
        // 监听input password的值
        console.log(e.target.value);
        this.setState({
            password:e.target.value
        })

    }
    componentDidMount(){
        console.log(this.props.location.pathname);
    }

}

export default Login;
