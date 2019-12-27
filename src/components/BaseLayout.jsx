import React from 'react';
import { accountActions, seedfinderActions } from '../actions'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import AppSider from './AppSider'
import './css/BaseLayout.css'

const { Content, Header } = Layout;

class BaseLayout extends React.Component {
  constructor(props) {
    super(props)
    this.goSearch= this.goSearch.bind(this)
    this.goUserAccount= this.goUserAccount.bind(this)
    this.logoutUser= this.logoutUser.bind(this)
    this.checkToken= this.checkToken.bind(this)
    this.goHome= this.goHome.bind(this)
  }
  goHome() {
    this.props.history.push('/')
  }
  goSearch() {
    this.props.history.push('/search')
  }

  goUserAccount() {
    this.props.history.push('/user-account')
  }

  logoutUser() {
    const { dispatch } = this.props
    dispatch(accountActions.logout)
    this.props.history.push('/login')
  }

  checkToken() {
    const { dispatch } = this.props;
    console.log('dispatching checktoken')
    dispatch(accountActions.checkToken())
  }

  render() {
    const { content, title, menu } = this.props
    return (
      <Layout className="base-layout">
        <AppSider 
          goHome={this.goHome}
          goSearch={this.goSearch} 
          goUserAccount={this.goUserAccount} 
          logoutUser={this.logoutUser}
          checkToken={this.checkToken}
          menu={menu}
        />
        <Layout>
          <Header>
            <div className="logo" style={{ display: 'flex' }}>
              <h1>{title}</h1>
            </div>
            {/* <UserMenu /> */}
          </Header>
          <Content className="layout-content">
            {content}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  const { authentication, seedfinder } = state
  return { authentication, seedfinder }
}

export default connect(mapStateToProps)(BaseLayout);