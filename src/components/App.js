import React, { useState, useEffect } from 'react';
import Search from './Search';
import Results from './Results';
import Footer from './Footer';
import LandingPage from './Landing';

import { APP_STATES } from '../constants';

import 'antd/dist/antd.css';
import '../styles/App.css';

window.apiUrl = process.env.REACT_APP_API_URL;

export default function App({ match }) {
  const { page } = match.params;
  const [services, setServices] = useState([]);
  const [username, setUsername] = useState('');
  const [appState, setAppState] = useState(APP_STATES.EMPTY);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch(window.apiUrl + '/services');
      const responseJSON = await response.json();
      setServices(responseJSON);
    };
    console.log('fetchServices');

    // fetch services if not already fetched (due to a network issue etc.)
    if (services.length === 0) {
      fetchServices();
    }
  }, [appState, services]);

  let content;

  switch (appState) {
    case APP_STATES.USER_TYPING:
      content = 'loading';
      break;
    case APP_STATES.SEARCH:
      content = <Results username={username} services={services} />;
      break;
    case APP_STATES.EMPTY:
    default:
      content = <LandingPage page={page} />;
      break;
  }

  return (
    <>
      <div className="jumbotron">
        <div className="container" id="jumbotron">
          <Search onInputChange={setUsername} onStateChange={setAppState} />
        </div>
      </div>
      {content}
      <div id="footer">
        <hr />
        <div className="container">
          <Footer page={page} />
        </div>
      </div>
    </>
  );
}
