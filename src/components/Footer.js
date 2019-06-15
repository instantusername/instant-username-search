import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Select } from 'antd';
import { FormattedMessage } from 'react-intl';
import { Link } from "react-router-dom";
import '../styles/Footer.css';

class Footer extends Component {
  handleChange = (value) => {
    let { page } = this.props;
    if (typeof page === "undefined") {
      page = ""
    }
    this.props.history.push("/" + value + "/" + page)
  }

  render() {
    let { lang } = this.props;

    switch (lang) {
      case "ca":
        break;
      case "de":
        break;
      case "en":
        break;
      case "es":
        break;
      case "fr":
        break;
      case "ru":
        break;
      case "tr":
        break;
      case "uk":
        break;
      default:
        lang = undefined;
        break;
    }

    return (
      <footer className='footer'>
        <div className='vessel pull-left'>
          <a href="https://github.com/umutcanbolat/instant-username-search/blob/master/LICENSE">{'© ' + new Date().getFullYear() + ' GPL 3.0'}</a>
          <a href="https://github.com/umutcanbolat/instant-username-search/">
            <FormattedMessage id="app.contribute"
              defaultMessage="Fork on GitHub" /></a>
          <Link to={"/" + lang + "/privacy"}>
            <FormattedMessage id="app.privacy"
              defaultMessage="Privacy" />
          </Link>
          <Link to={"/" + lang + "/terms"}>
            <FormattedMessage id="app.terms"
              defaultMessage="Terms" />
          </Link>
          <a href="mailto:help@instantusername.com">
            <FormattedMessage id="app.contact"
              defaultMessage="Contact" />
          </a>
        </div>
        <div className='languages pull-right'>
          <div className='coffee'>
            <a target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/1ulP4IGFm">
              <img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee!" />
              <span>
                <FormattedMessage id="app.coffee"
                  defaultMessage="Buy me a coffee" />
              </span>
            </a>
          </div>
          <Select style={{ width: 120 }} placeholder="Language" value={lang} onChange={this.handleChange}>
            <Select.Option value="ca">Català</Select.Option>
            <Select.Option value="de">Deutsch</Select.Option>
            <Select.Option value="en">English</Select.Option>
            <Select.Option value="es">Español</Select.Option>
            <Select.Option value="fr">Français</Select.Option>
            <Select.Option value="ru">Pусский</Select.Option>
            <Select.Option value="tr">Türkçe</Select.Option>
            <Select.Option value="uk">Українська</Select.Option>
          </Select>
        </div>

      </footer>
    );
  }
}
export default withRouter(Footer);