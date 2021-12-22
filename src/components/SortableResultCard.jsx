import React, { useState, useCallback, useEffect, useRef } from 'react';
import { observeElement } from '../utils/observerUtil';
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
  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardRef = useRef();
  const previousCheckEndpoint = useRef('');

  useEffect(() => {
    const observer = observeElement(([entry]) => {
      setIsCardVisible(entry.isIntersecting);
    });
    const element = cardRef.current;

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  const fetchAndSetResponse = useCallback(
    async signal => {
      await fetch(window.apiUrl + checkEndpoint, { signal })
        .then(response => response.json())
        .then(responseJSON => {
          setResponse(responseJSON);
          setIsLoading(false);
        })
        .catch(e => {
          if (e.name !== 'AbortError') {
            // do not set isLoading as false when it is because of request abortion
            setIsLoading(false);
          }
          console.error(e.name);
        });
    },
    [checkEndpoint],
  );

  useEffect(() => {
    if (isCardVisible && checkEndpoint !== previousCheckEndpoint.current) {
      setIsLoading(true);

      if (ready) {
        const controller = new AbortController();
        previousCheckEndpoint.current = checkEndpoint;
        fetchAndSetResponse(controller.signal);

        return () => {
          console.log('==> dif ', previousCheckEndpoint, checkEndpoint);
          if (checkEndpoint !== previousCheckEndpoint.current) {
            // abort requests
            if (controller !== undefined) {
              console.log('aborting ', checkEndpoint);
              controller.abort();
            }
          }
        };
      }
    }
  }, [fetchAndSetResponse, checkEndpoint, ready, isCardVisible]);

  const { state, message } = isLoading
    ? statusMap.loading
    : response?.available
    ? statusMap.available
    : statusMap.taken;

  const link = !isLoading ? response?.url : undefined;

  if (serviceName === 'Instagram') {
    console.log(state, message, isLoading);
  }

  return (
    <a
      ref={cardRef}
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
