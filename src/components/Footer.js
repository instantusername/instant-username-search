import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from "react-router-dom";
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    let { lang, page } = this.props;
    if (typeof page === "undefined") {
      page = ""
    }

    return (
      <footer className='footer'>
        <div className='vessel pull-left'>
          <a href="https://github.com/umutcanbolat/instant-username-search/blob/master/LICENSE">{'© ' + new Date().getFullYear() + ' GPL 3.0'}</a>
          <a href="https://github.com/umutcanbolat/instant-username-search/">
            <FormattedMessage id="app.contribute"
              defaultMessage="Fork on GitHub" /></a>
          <Link to={"/" + (lang ? lang : "en") + "/privacy"}>
            <FormattedMessage id="app.privacy"
              defaultMessage="Privacy" />
          </Link>
          <Link to={"/" + (lang ? lang : "en") + "/terms"}>
            <FormattedMessage id="app.terms"
              defaultMessage="Terms" />
          </Link>
          <a href="mailto:help@instantusername.com">
            <FormattedMessage id="app.contact"
              defaultMessage="Contact" />
          </a>
        </div>
        <div className='languages pull-right'>
          <Link to={"/ca/" + page}>Català</Link>
          <Link to={"/de/" + page}>Deutsch</Link>
          <Link to={"/en/" + page}>English</Link>
          <Link to={"/es/" + page}>Español</Link>
          <Link to={"/fr/" + page}>Français</Link>
          <Link to={"/tr/" + page}>Türkçe</Link>
        </div>
        {/* <div className='coffee'>
          <a target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/1ulP4IGFm">
            <img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee!" />
            <span>
              <FormattedMessage id="app.coffee"
                defaultMessage="Buy me a coffee" />
            </span>
          </a>
        </div> */}
      </footer>
    );
  }
}
export default Footer;