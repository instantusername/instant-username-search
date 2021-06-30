import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import translations from '../translations';
import '../styles/Footer.css';

// ["en", "de", "tr", ...]
const supportedLocaleStrings = Object.keys(translations);

class Footer extends Component {
  handleChange = value => {
    let { page } = this.props;
    if (typeof page === 'undefined') {
      page = '';
    }
    this.props.history.push('/' + value + '/' + page);
  };

  render() {
    let { lang } = this.props;

    // if user's default language (or the lang param read from url) is not supported, let's fallback to English.
    if (!supportedLocaleStrings.includes(lang)) {
      lang = 'en';
    }

    return (
      <footer className="footer">
        <div className="vessel pull-left">
          <a href="https://github.com/umutcanbolat/instant-username-search/blob/master/LICENSE">
            {'© ' + new Date().getFullYear() + ' GPL 3.0'}
          </a>
          <a href="https://github.com/umutcanbolat/instant-username-search/">
            <FormattedMessage id="app.contribute" defaultMessage="Fork on GitHub" />
          </a>
          <Link to={'/' + lang + '/privacy'}>
            <FormattedMessage id="app.privacy" defaultMessage="Privacy" />
          </Link>
          <Link to={'/' + lang + '/terms'}>
            <FormattedMessage id="app.terms" defaultMessage="Terms" />
          </Link>
          <a href="mailto:help@instantusername.com">
            <FormattedMessage id="app.contact" defaultMessage="Contact" />
          </a>
        </div>
      </footer>
    );
  }
}
export default withRouter(Footer);
