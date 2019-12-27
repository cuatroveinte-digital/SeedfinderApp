import React from 'react'
import { Avatar, Card, Col, Row } from 'antd'
import './css/Home.css';
import { seedfinderActions } from '../actions'
import { connect } from 'react-redux'
import { StrainsLinkList } from './StrainsLinkList';
import './css/StrainDetail.css'
import BaseLayout from './BaseLayout'


class StrainDetail extends React.Component {

  componentDidMount() {
    const p = this.props.match.params
    const breeder = p.breeder ? p.breeder : ''
    const strain = p.strain ? p.strain : ''
    const { dispatch } = this.props
    dispatch(seedfinderActions.getStrain(strain, breeder))
  }

  render() {
    
    const { strain } = this.props.seedfinder
    var allTogether = <div></div>
    var strainName = ''
    if (strain) {
      strainName = strain.name
      const i = strain.brinfo
      const breederName = <div><h2>Breeder</h2><a href={"/breeder/" + i.id}>{i.name}</a></div>
      const pic = <Avatar size={150} shape="square" src={strain.brinfo.pic} />
      const description = i.descr
      const type = <span>{'Type: ' + i.type}</span>
      const f = strain.brinfo.flowering
      const flowering = <div className="flowering">
        <h2>Flowering</h2>
        <ul>
          <li>Auto: {f.auto ? 'yes' : 'no'}</li>
          <li>Days: {f.days}</li>
          <li>Info: <span dangerouslySetInnerHTML={{ __html: f.info }} ></span></li>
        </ul>
      </div>
      const parentInfo = <span>{strain.parents.info}</span>
      const linkList = <StrainsLinkList strains={strain.parents.strains} />
      const parents = <div className="parents">
        <h2>Parents</h2>
        info: {parentInfo}
        {linkList}
      </div>
      allTogether = <Card className="strain-card">
        <Row className="strain-row">
          <Col sm={{ span: 12 }} md={{ span: 6 }}>{pic}</Col>
          <Col sm={{ span: 12 }} md={{ span: 6 }}>
            {breederName}
            {type}
          </Col>
          <Col sm={{ span: 12 }} md={{ span: 6 }}>{flowering}</Col>
          <Col sm={{ span: 12 }} md={{ span: 6 }}>{parents}</Col>
          <Col className="strain-description" span={24}><div dangerouslySetInnerHTML={{ __html: description }} ></div></Col>
        </Row>
      </Card>
    }

    return (
      <BaseLayout title={strainName} content={allTogether} {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  const { authentication, seedfinder } = state
  return { authentication, seedfinder }
}

export default connect(mapStateToProps)(StrainDetail);