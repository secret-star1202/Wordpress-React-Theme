import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Metamorph } from 'react-metamorph';
import { Redirect } from 'react-router-dom';
import { default as siteInfo } from '../utils/config';
import axios from "axios";

class PagesItem extends Component {
  static propTypes = {
    match: PropTypes.object
  };

  constructor(props) {
    super(props);

    this.state = {
      page: undefined
    };
  }

  componentWillMount() {
    axios.get(
      `${siteInfo.siteUrl}/wp-json/wp/v2/pages?slug=${
        this.props.match.params.slug.replace(/\/$/, '')}`).then(
      res => {
        self.setState({ page: res.data.length > 0 ? res.data[0] : null });
      }
    );
  }

  render() {
    if (this.state.page) {
      return [
        <Metamorph title={this.state.page.title.rendered + ' - KTUH FM Honolulu | ' +
          'Radio for the People'} image='https://ktuh.org/img/ktuh-logo.jpg' />,
        <h2 className='general__header'>{this.state.page.title.rendered}</h2>,
        <div className="page__content"
          dangerouslySetInnerHTML={{ __html: this.state.page.content.rendered }}
        />
      ];
    }
    else if (this.state.page === undefined) {
      return null;
    }
    else if (this.state.page === null) {
      return <Redirect to={`${siteInfo.siteUrl}/not-found`} />;
    }
  }
}

export default PagesItem;