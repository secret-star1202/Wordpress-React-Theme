import React, { Component } from 'react';
import HomeSidebarNext from './HomeSidebarNext.jsx';
import { default as siteInfo } from '../utils/config';
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
    axios.get(`https://spinitron.com/api/shows?access-token=${siteInfo.spinAccessToken}`).then(
      response => { self.setState({ nextOnAir: response.data.items[0] });
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