import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../helpers';
import { notifyActions } from '../actions';
import Home from './Home';
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import UserAccount from './UserAccount';
import StrainDetail from './StrainDetail';
import BreederDetail from './BreederDetail'
import './css/App.css';
import Notify from './Notify'
import Search from './Search'

class App extends React.Component {
  state = {
    "loggedIn": (JSON.parse(localStorage.getItem('user'))),
    "user": JSON.parse(localStorage.getItem('user'))
  }  
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(notifyActions.clear());
    });
  }

  componentDidUpdate() {
    const { notify } = this.props;
    if (notify && notify.message) { Notify(notify) }
  }
  
  render() {
    return (
      <div className="accounts-app">
        <Router history={ history }>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/user-account" component={UserAccount} />
            <Route exact path="/strain/:strain/:breeder" component={StrainDetail} />
            <Route exact path="/breeder/:breeder" component={BreederDetail} />
            <Route path="/search" component={Search} />} />
          </Switch>
        </Router>
      </div>
    )
  }
}


function mapStateToProps(state) {
  const { notify } = state;
  return {
    notify
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 