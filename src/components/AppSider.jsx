import React from 'react';
import { Avatar, Layout, Menu, Icon } from 'antd'
import siderLogo from './assets/siderLogo.jpg'
const { Sider } = Layout
const { SubMenu } = Menu

class AppSider extends React.Component {

  render() {
    const { goHome, goSearch, goUserAccount, logoutUser, checkToken, menu } = this.props
    return (
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo" style={{ height: 120 }}>
          <Avatar size={100} style={{ width: 200 }} shape="square" srv={siderLogo} src={siderLogo} />
        </div>
        <Menu theme="dark" defaultSelectedKeys={[menu]} mode="inline">
          <Menu.Item key="home" onClick={goHome}>
            <Icon type="home" />
            <span>Home</span>
          </Menu.Item>
          <Menu.Item key="search" onClick={goSearch}>
            <Icon type="search" />
            <span>Search</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>Account</span>
              </span>
            }
          >
            <Menu.Item key="user-account" onClick={goUserAccount}>User Account</Menu.Item>
            <Menu.Item key="check-token" onClick={checkToken}>Check Token</Menu.Item>
            <Menu.Item key="logout" onClick={logoutUser}>Logout</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    )
  }
}

export default AppSider