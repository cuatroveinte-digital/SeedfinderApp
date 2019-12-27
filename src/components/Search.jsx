import React from 'react'
import { Col, Input, List, Row } from 'antd'
import { seedfinderActions } from '../actions'
import { connect } from 'react-redux'
import BaseLayout from './BaseLayout'
import './css/Search.css'

class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchStrain = this.searchStrain.bind(this)
  }

  searchStrain(query) {
    const { dispatch } = this.props
    dispatch(seedfinderActions.searchStrain(query))
  }

  componentDidMount() {
    const { dispatch } = this.props
    const params = new URLSearchParams(this.props.location.search);
    const k = params.get('k');
    if (k) dispatch(seedfinderActions.searchStrain(k))
  }

  render() {
    const { seedfinder } = this.props
    const { results, fetching } = seedfinder
    const showResults = results && !results.error

    var strains = []
    if (showResults) {
      for (var name in results.strains) {
        strains.push(results.strains[name]);
      }
    }
    const header = results ? results.info : 'none header'
    const { Search } = Input
    return (
      
      <BaseLayout title="Search" menu="search" {...this.props} content={
        <div>
          <Row type="flex" justify="space-around" align="middle" className="big-search">
            <Col span={22} className="big-search-col">
              <h1 className="search-title">Seed Finder</h1>
              <Search size="large" placeholder="search strains and breeders" onSearch={query => this.searchStrain(query)} enterButton />
            </Col>
          </Row>
          <Row>
            <Col span={22} offset={1} className="search-results">
              <List
                header={header}
                bordered
                dataSource={strains}
                loading={fetching}
                pagination={{
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 6,
                }}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href={"strain/" + item.id + "/" + item.brid}>{item.name}</a>}
                      description={'Breeder: ' + item.brname} />
                  </List.Item>
                )}
              >
              </List>
            </Col>
          </Row>
        </div>
      } />
    )
  }
}

function mapStateToProps(state) {
  const { seedfinder } = state
  return { seedfinder }
}

export default connect(mapStateToProps)(Search);