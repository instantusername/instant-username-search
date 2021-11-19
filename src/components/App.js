/* eslint-disable react/prop-types */
/* eslint-disable react/no-deprecated */
import React, { useState, useEffect, useMemo } from 'react';
import Search from './Search';
import Results from './Results';
import Footer from './Footer';
import Privacy from './Privacy';
import Terms from './Terms';
import LandingPage from './Landing';

import 'antd/dist/antd.css';
import '../styles/App.css';

window.apiUrl = process.env.REACT_APP_API_URL;

export default function App({ match }) {
  const { page } = match.params;
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState();
  const [username, setUsername] = useState('');

  const fetchServices = async () => {
    const response = await fetch(window.apiUrl + '/services');
    const responseJSON = await response.json();
    setServices(responseJSON);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  // handle while user types
  const inputChanged = text => {
    setUsername(text);
  };

  // Can not listen localstorage changes on the same window
  // Had to use callback
  const onFilterChange = filters => {
    setFilteredServices(filters);
  };

  return useMemo(() => {
    // main content of page
    let content;

    if (username.length > 0) {
      content = (
        <div className="container" id="content">
          <Results username={username} services={services} filteredServices={filteredServices} />
        </div>
      );
    } else {
      // search is empty, show the page content
      switch (page) {
        case 'privacy':
          content = (
            <div className="container" id="content">
              <Privacy />
            </div>
          );
          break;
        case 'terms':
          //terms and conditions
          content = (
            <div className="container" id="content">
              <Terms />
            </div>
          );
          break;
        default:
          content = <LandingPage />;
          break;
      }
    }

    return (
      <>
        <div className="jumbotron">
          <div className="container" id="jumbotron">
            <Search
              input={username}
              onChange={inputChanged}
              onFilterChange={onFilterChange}
              services={services}
            />
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
    // eslint-disable-next-line
  }, [username, services, page]);
}
