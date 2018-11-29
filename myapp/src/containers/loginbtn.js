import React from 'react'
import { Button } from 'antd-mobile';
import {withRouter} from 'react-router-dom'

class LoginBtn extends React.Component{
    login=()=>{
        console.log('login')
        this.props.history.push("/chat");
    }
    render(){
        return(
            <div className="login-btn">
                <Button onClick={this.login} type="primary" size="small" style={{width:'60%',margin:'30px auto 0',fontSize:'16px'}}>登陆</Button>
            </div>
        )
    }
}

export default withRouter(LoginBtn)