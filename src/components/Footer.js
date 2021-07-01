import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="vessel pull-left">
          <a href="https://github.com/umutcanbolat/instant-username-search/blob/master/LICENSE">
            {'© ' + new Date().getFullYear() + ' GPL 3.0'}
          </a>
          <a href="https://github.com/umutcanbolat/instant-username-search/">Fork on GitHub</a>
          <Link to={'/privacy'}>Privacy</Link>
          <Link to={'/terms'}>Terms</Link>
          <a href="mailto:help@instantusername.com">Contact</a>
        </div>
      </footer>
    );
  }
}
export default withRouter(Footer);
