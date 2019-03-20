import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='pull-left'>
          <ul>
            <li><a href="https://github.com/umutcanbolat/instant-username-search/blob/master/LICENSE">{'© ' + new Date().getFullYear() + ' GPL 3.0'}</a></li>
            <li><a href="https://github.com/umutcanbolat/instant-username-search/">
              <FormattedMessage id="app.contribute"
                defaultMessage="Fork me on GitHub" />
            </a></li>
          </ul>
        </div>
        <div className='pull-right'>
          <ul>
            <li><a href='en'>English</a></li>
            <li><a href='de'>Deutsch</a></li>
            <li><a href='tr'>Türkçe</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}
export default Footer;