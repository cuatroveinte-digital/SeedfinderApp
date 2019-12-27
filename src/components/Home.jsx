import React from 'react'
import './css/Home.css';
import BaseLayout from './BaseLayout'
import HomeEmpty from './HomeEmpty'

class Home extends React.Component {

  render() {
    return (
      <BaseLayout title="Home" menu="home" content={HomeEmpty} {...this.props}/>
    );
  }
}

export default Home
