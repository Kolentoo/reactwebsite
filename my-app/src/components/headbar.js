import React from 'react';
import { Menu, Switch } from 'antd';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class HearBar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
    if(e.key==='loginOut'){
      this.props.history.push('/');
      this.props.sendAction();
      this.setState({});//redux 驱动视图
    }else if(e.key==='demoa'){
      this.props.history.push('/demoa');
    }else if(e.key==='demob'){
      this.props.history.push('/demob');
    }else{

    }
    
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="demoa" icon={<MailOutlined />}>
          demoa
        </Menu.Item>
        <Menu.Item key="demob" icon={<AppstoreOutlined />}>
          demob
        </Menu.Item>
        <SubMenu icon={<SettingOutlined />} title="设置">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="loginOut">
            退出
        </Menu.Item>
      </Menu>
    );
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      sendAction: () => {
          dispatch({
              type:"hideLayout"
          })
      }
  }
}

export default connect(null,mapDispatchToProps)(withRouter(HearBar));