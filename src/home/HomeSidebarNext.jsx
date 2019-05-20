import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { moment as momentUtil } from 'moment';

class HomeSidebarNext extends Component {
  static propTypes = {
    nextOnAir: PropTypes.object
  };

  render() {
    if (this.props.ready)
      return (<div className='home__next-show'>
        <div className='home__next-show-deets'>
          <p className="home__next-on-air">Next On Air</p>
          <p className='home__next-show-name'>
              {this.props.nextOnAir.title}
          </p>
          <p className='home__next-show-time'>
            {momentUtil(this.props.nextOnAir.start).format('h:mm A') + '-' +
             momentUtil(this.props.nextOnAir.end).format('h:mm A') }
          </p>
        </div>
      </div>);
    else return null;
  }
}

export default HomeSidebarNext;
