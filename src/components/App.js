/* eslint-disable react/prop-types */
/* eslint-disable react/no-deprecated */
import React, { useState } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import Search from './Search';
import Results from './Results';
import Footer from './Footer';
import Privacy from './Privacy';
import Terms from './Terms';
import LandingPage from './Landing';

import locales from '../translations/locales';
import translations from '../translations';

import 'antd/dist/antd.css';
import '../styles/App.css';

window.apiUrl = process.env.REACT_APP_API_URL;

addLocaleData(locales);

export default function App({ match }) {
  const { page, lang = 'en' } = match.params;
  const [username, setUsername] = useState('');

  function onReset() {
    setUsername('');
  }

  // main content of page
  let content;

  if (username) {
    content = <Results username={username} />;
  } else {
    // search is empty, show the page content
    switch (page) {
      case 'privacy':
        content = <Privacy />;
        break;
      case 'terms':
        //terms and conditions
        content = <Terms />;
        break;
      default:
        content = <LandingPage />;
        break;
    }
  }

  return (
    <IntlProvider locale={lang} messages={translations[lang]}>
      <>
        <div className="jumbotron">
          <div className="container" id="jumbotron">
            <Search
              onChange={username => {
                setUsername(username);
              }}
              onClickHeader={onReset}
              username={username}
            />
          </div>
        </div>
        <div className="container" id="content">
          {content}
        </div>
        <div id="footer">
          <hr />
          <div className="container">
            <Footer page={page} lang={lang} />
          </div>
        </div>
      </>
    </IntlProvider>
  );
}
