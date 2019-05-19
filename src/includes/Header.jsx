import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className='navbar navbar-default' role='navigation'>
        <div className='info-box'>
          <a className='info-box__link' href='/'>
            <img alt='KTUH FM' src='/wp-content/themes/images/ktuh-fm-logo.png' />
          </a>
        </div>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed'
            data-toggle='collapse' data-target='#navigation'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Header;
