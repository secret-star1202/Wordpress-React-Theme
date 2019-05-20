import React, { Component } from 'react';
import HomeSidebarNext from './HomeSidebarNext.jsx';
import { spinAccessToken } from '../utils/config';
import axios from 'axios';

export default class HomeSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextOnAir: null
    }
  }

  componentWillMount() {
    let self = this;
    axios.get(`https://spinitron.com/api/shows?access-token=${spinAccessToken}`).then(response => response.data).then(
      data => JSON.parse(data)
    ).then(function(json) {
      self.setState({ nextOnAir: json.items[0] });
    });
  }

  render() {
    return (
      <div className='home__sidebar'>
        {this.state.nextOnAir ? <HomeSidebarNext props={this.state.nextOnAir} /> : null}
      </div>
    );
  }
}
