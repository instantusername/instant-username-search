import React, { useState, useCallback, useEffect } from 'react';
import '../styles/ResultCard.css';

const statusMap = {
  available: { state: 'available', message: 'Available' },
  taken: { state: 'taken', message: 'Taken' },
  loading: { state: 'loading', message: 'Checking...' },
};

/*
    Do not send any requests until the prop `ready` becomes true
*/
export default function SortableResultCard({ serviceName, checkEndpoint, ready = true }) {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState({});

  const fetchAndSetResponse = useCallback(async () => {
    await fetch(window.apiUrl + checkEndpoint)
      .then(response => response.json())
      .then(responseJSON => {
        setResponse(responseJSON);
      })
      .catch(e => {
        console.error(e.message);
      });

    setIsLoading(false);
  }, [checkEndpoint]);

  useEffect(() => {
    setIsLoading(true);
    ready && fetchAndSetResponse();
  }, [fetchAndSetResponse, ready]);

  const { state, message } = isLoading
    ? statusMap.loading
    : response?.available
    ? statusMap.available
    : statusMap.taken;

  const link = !isLoading && response?.url;

  return (
    <a
      className={'card ' + state}
      href={link}
      target={isLoading ? undefined : '_blank'}
      rel="noopener noreferrer"
    >
      <div className="card-body">
        <div className="meta-title">{serviceName}</div>
        <div className="description">
          <span>{message}</span>
        </div>
      </div>
    </a>
  );
}
