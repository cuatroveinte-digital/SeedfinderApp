import React from 'react'
import { List } from 'antd'
import { seedfinderActions } from '../actions'
import { connect } from 'react-redux'
import BaseLayout from './BaseLayout'

class BreederDetail extends React.Component {

  componentDidMount() {
    const p = this.props.match.params
    const breeder = p.breeder ? p.breeder : ''
    const { dispatch } = this.props
    dispatch(seedfinderActions.getBreeder(breeder))
  }


  render() {
    const { seedfinder } = this.props
    const { breeder } = seedfinder

    var info
    var strains = []
    var breederId = ''
    if (breeder) {
      breederId = Object.keys(breeder)[0]
      info = breeder[breederId];
      for (var strain in info.strains) {
        strains.push({ id: strain, name: info.strains[strain] })
      }

    }
    return (
      <BaseLayout title="Breeder" {...this.props} content={
        <List
        header={<div><h1 style={{marginBottom: 2, display: 'inline'}}>{info ? info.name : ''}</h1><span> ({strains.length} strains)</span></div>}
        bordered
        dataSource={strains}
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 9,
        }}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta title={<a href={"/strain/" + item.id + "/" + breederId}>{item.name}</a>} />
          </List.Item>
        )}
      >
      </List>
      } />

    )
  }
}

function mapStateToProps(state) {
  const { seedfinder } = state
  return { seedfinder }
}

export default connect(mapStateToProps)(BreederDetail);