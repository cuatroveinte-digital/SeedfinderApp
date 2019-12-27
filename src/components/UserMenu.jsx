import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Popover } from 'antd'
import './css/UserMenu.css'
import { accountActions, seedfinderActions } from '../actions'
import { connect } from 'react-redux'

class UserMenu extends React.Component {

  constructor(props) {
    super(props)
    this.checkToken = this.checkToken.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
    this.checkStatus = this.checkStatus.bind(this)
    this.getBreeders = this.getBreeders.bind(this)
  }

  checkToken(e) {
    e.preventDefault()
    const { dispatch } = this.props;
    dispatch(accountActions.checkToken())
  }

  logoutUser(e) {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(accountActions.logout)
    this.props.history.push('/login')
  }

  checkStatus(e) {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(accountActions.getServerStatus())

  }

  getBreeders(e) {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(seedfinderActions.getBreeders())

  }

  render() {
    
    const user = JSON.parse(localStorage.getItem('user'))
    const loggedIn = (user !== null)
    const menuContent = <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Link className="nav-text" to="/user-account" title="Profile">Your Profile</Link>
      <Link className="nav-text" to="/check-token" onClick={this.checkToken} title="check-token">Check Token</Link>
      <Link className="nav-text" to="/check-status" onClick={this.checkStatus} title="check-token">Check Status</Link>
      <Link className="nav-text" to="/breeders" onClick={this.getBreeders} title="get-breeders">Get Breeders</Link>
      <Link className="nav-text" to="/logout" onClick={this.logoutUser} title="Logout">Logout</Link>
    </div>

    return (

      <div className="user-details">
        <Popover placement="bottomRight" content={menuContent} title={loggedIn ? user.fullname : '?'} trigger="click">
          <Avatar>{loggedIn ? user.fullname.charAt(0) : '?'}</Avatar>
        </Popover>
      </div>


    )
  }
}


function mapStateToProps(state) {
  const { authentication, seedfinder } = state
  return { authentication, seedfinder }
}

export default connect(mapStateToProps)(UserMenu);