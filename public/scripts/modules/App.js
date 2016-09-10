import React from 'react'
import { Link, IndexLink } from 'react-router'

export default React.createClass({
  render(){
    return <div>
      <h1>Hello react router App</h1>
      <ul>
        <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
        <li><Link to="/repos" activeStyle={{ color: 'red' }}>Repos</Link></li>
        <li><Link to="/" activeStyle={{ color: 'red' }} onlyActiveOnIndex={true}>Home</Link></li>
      </ul>

      {this.props.children}
    </div>
  }
})
