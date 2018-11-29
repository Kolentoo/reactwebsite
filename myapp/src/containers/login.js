import React from 'react'
import {withRouter} from 'react-router-dom'
import bj from '../images/bj1.jpg'

import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';//需要另外安装不属于框架内
import LoginBtn from './loginbtn'


class BasicInputExample extends React.Component {
    componentDidMount() {
        document.getElementById('loginbox').style.height="100vh"
    }
    render() {
        const { getFieldProps } = this.props.form;
        const logincss = {
            loginbox:{background:'url('+bj+') no-repeat',backgroundSize:'cover',backgroundAttachment: 'fixed'},
            inputitem:{background:'none'},
            h2:{padding:'20% 0 0 0',fontSize:'26px',textAlign:'center',color:'#fff'}
        }
        return (
            <div className="login-box" id="loginbox" style={logincss.loginbox}>
                <h2 className="login-title" style={logincss.h2}>Kolento</h2>
                <List renderHeader={() => ''} >

                    <InputItem {...getFieldProps('autofocus')} clear placeholder="请输入用户名" ref={el => this.autoFocusInst = el} >用户名</InputItem>
                    <InputItem {...getFieldProps('focus')} type="password" clear placeholder="请输入密码" ref={el => this.inputRef = el} >密码</InputItem>

                </List>

                <LoginBtn />
                
            </div>
        );
    }
}

const BasicInputExampleWrapper = createForm()(BasicInputExample);


export default BasicInputExampleWrapper

