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
    const cardLoading = spin || isLoading;
    let classStatus = 'loading';
    let description = 'Checking...';

    if (!cardLoading && response) {
      // if loading state is ended
      // and the result is fetched already
      if (response.available) {
        classStatus = 'available';
        description = 'Available';
      } else {
        classStatus = 'taken';
        description = 'Taken';
      }
    }

    return (
      <a
        className={'card ' + classStatus}
        href={cardLoading ? undefined : '/#'}
        target={cardLoading ? undefined : '_blank'}
        rel={cardLoading ? undefined : 'noopener noreferrer'}
      >
        <div className="card-body">
          <div className="meta-title">{serviceName}</div>
          <div className="description">
            <span>{description}</span>
          </div>
        </div>
      </a>
    );
  }, [isLoading, response, serviceName, username, spin]);
}
