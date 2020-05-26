import React from 'react';
import RouteBox from '../router/route'
import LifeCycleComponent from '../router/routeEach';
import HeadBar from '../components/headbar'
import { Layout, Menu, Breadcrumb } from 'antd';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const mapStateToProps = state => {
  console.log('app',state);
  return state;
}


class LayoutBox extends React.Component {

  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  goPage=(e)=>{
    console.log('click ', e);
    switch (e.key) {
      case '1':
        this.props.history.push('/movie');
        break;
    
      default:
        break;
    }
  }

  render() {
    console.log('testprops',this.props)
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.goPage}>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              电影
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} >
            <HeadBar></HeadBar>
        </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {
                <Breadcrumb.Item >{localStorage.getItem('currentBread')}</Breadcrumb.Item>
                // 动态面包屑
                // window.location.href.split('#/')[1].split('/').map((current,index,arr)=>{
                //   console.log(current)
                //   return <Breadcrumb.Item key={index}>{current}</Breadcrumb.Item>
                // })
              }

            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <RouteBox/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}



export default connect(mapStateToProps)(withRouter(LayoutBox));

