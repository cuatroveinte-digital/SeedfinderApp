import React from 'react';
import './css/StrainsLinkList.css'

export class StrainsLinkList extends React.Component {
  render() {
    const strains = this.props.strains;
    var r = [];
    for (var s in strains) {
      r.push({
        name: strains[s].name,
        brid: strains[s].brid,
        id: strains[s].id,
        brname: strains[s].brname,
      });
    }
    const listItems = r.map((s) => {
      return <li key={s.id}><a href={"/strain/" + s.id + "/" + s.brid}>{s.name}</a> (<a href={"/breeder/"+s.brid}>{s.brname}</a>)</li>;
    });
    return <ul className="strains-links-list">{listItems}</ul>;
  }
}
