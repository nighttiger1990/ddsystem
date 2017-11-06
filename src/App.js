import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {NavLink, Switch, Route} from 'react-router-dom'
import OrderManager from './components/OrderManager'
import OrderItem from './components/OrderItem'
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Layout>
        <Header className="header" style={{ position: 'fixed', width: '100%', zIndex : 2106 }}>
          <div className="logo" >
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </Header>
        <Layout>
          <Sider style={{ background: '#fff', marginTop: 64 }}>
            <Menu theme='dark'
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="laptop" />Main Feature</span>}>
                <Menu.Item key="1"><NavLink to='/Home' title='Home'>Home</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to='/Home/Order' title='Order'>Order</NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink to='/Home/Other' title='Other'>Other link</NavLink></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="notification" />Sub Feature</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="idcard" />Account</span>}>
                <Menu.Item key="9">Basic Infomation</Menu.Item>
                <Menu.Item key="10">Change Password</Menu.Item>
                <Menu.Item key="11">Settings</Menu.Item>
                <Menu.Item key="12">Logout</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px', marginTop:64 }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><NavLink to='/Home' title='Home'>Home</NavLink></Breadcrumb.Item>
              <Breadcrumb.Item><NavLink to='/Home/Order' title='Order'>Order</NavLink></Breadcrumb.Item>
            </Breadcrumb>
            <Content style={{ background: '#fff', padding: 24, minHeight: 400 }} history={this.props.history}>
              <Switch>
                <Route path='/Home/Order/OrderItem' component={OrderItem} />
                <Route path='/Home/Order' component={OrderManager} />
                <Route path='/Home/Other' render={() => 'Other'}/>
              </Switch>
            </Content>
          </Layout>
        </Layout>
        <Footer className='footer' 
        style={{ 
          textAlign: 'center',
          background: '#404040', 
          color:'#fff'}}>
          <div>Power of Ant Design ©2017 - Created by Topica Uni Team</div>
        </Footer>
      </Layout>
    );
  }
}

export default App;
