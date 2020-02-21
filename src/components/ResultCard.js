/* eslint-disable react/prop-types */
import React, { useEffect, useState, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import '../styles/ResultCard.css';

export default function ResultCard({ username, serviceName, spin }) {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState({});
  const apiUrl = `${window.apiUrl}check/${serviceName}/${username}/`;

  useEffect(() => {
    // instantiniate a new controller for this cycle
    let controller = new AbortController();
    let signal = controller.signal;

    if (!spin) {
      async function fetchAvailability() {
        setIsLoading(true);

        await fetch(apiUrl, { signal })
          .then(response => response.json())
          .then(responseJSON => {
            setResponse(responseJSON);
          })
          .catch(e => {
            // console.error(e.message);
            // Let's act like nothing happened :pp
          });

        setIsLoading(false);
      }

      fetchAvailability();
    }

    return () => {
      // abort requests
      if (controller !== undefined) {
        controller.abort();
      }
    };
  }, [username, serviceName, spin]);

  return useMemo(() => {
    let classStatus = 'loading';
    if (!isLoading && !spin) {
      // if the result is fetched already
      classStatus = response && response.available ? 'available' : 'taken';
    }

    return spin ? (
      <a className={'card loading'} href={'/#'} target="_blank" rel="noopener noreferrer">
        <div className="card-body">
          <div className="meta-title">{serviceName}</div>
          <div className="description">
            <span>Loading...</span>
          </div>
        </div>
      </a>
    ) : (
      <a className={'card ' + classStatus} href={'/#'} target="_blank" rel="noopener noreferrer">
        <div className="card-body">
          <div className="meta-title">{serviceName}</div>
          <div className="description">
            <span>
              {isLoading ? 'Loading...' : classStatus === 'available' ? 'Available' : 'Taken'}
            </span>
          </div>
        </div>
      </a>
    );
  }, [isLoading, response, serviceName, username, spin]);
}
