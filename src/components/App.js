/* eslint-disable react/prop-types */
/* eslint-disable react/no-deprecated */
import React, { useState, useEffect, useCallback } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import { debounce } from 'debounce';
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
  const [services, setServices] = useState([]);
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchServices = useCallback(async () => {
    const response = await fetch(window.apiUrl + 'services/getAll/');
    const responseJSON = await response.json();
    setServices(responseJSON);
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  const applyInputChange = useCallback(text => {
    setUsername(text ? text : '');
    setIsLoading(false);
  }, []);

  const debouncedApplyInputChange = useCallback(debounce(applyInputChange, 800), [
    applyInputChange,
  ]);

  // handle while user types
  const inputChanged = useCallback(
    text => {
      if (text && text.length > 0) {
        // enter loading state while user keps typing, handle it with a debounced function
        setIsLoading(true);
        debouncedApplyInputChange(text);
      } else {
        // if input is cleared, cancel debounce and call non-debounced function with empty input
        debouncedApplyInputChange.clear();
        applyInputChange(text);
      }
    },
    [applyInputChange, debouncedApplyInputChange],
  );

  // main content of page
  let content;

  if (username.length > 0 || isLoading) {
    content = <Results username={username} services={services} isLoading={isLoading} />;
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
        {JSON.stringify({ isLoading, username, length: username.length })}
        <div className="jumbotron">
          <div className="container" id="jumbotron">
            <Search onChange={inputChanged} />
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
