/* eslint-disable react/prop-types */
import React, { useEffect, useState, useMemo, useRef } from 'react';
import '../styles/ResultCard.css';
import { observeElement } from '../utils/observerUtil';

export default function ResultCard({ serviceName, checkEndpoint, spin }) {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState({});
  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    const observer = observeElement(([entry]) => {
      if (entry.isIntersecting) {
        setIsCardVisible(true);
      }
    });

    observer.observe(cardRef.current);
    return () => {
      observer.unobserve(cardRef.current);
    };
  }, []);

  useEffect(() => {
    // instantiniate a new controller for this cycle
    let controller = new AbortController();
    let signal = controller.signal;

    const checkUrl = window.apiUrl + checkEndpoint;

    if (!spin && isCardVisible) {
      async function fetchAvailability() {
        setIsLoading(true);

        await fetch(checkUrl, { signal })
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
  }, [checkEndpoint, spin, isCardVisible]);

  return useMemo(() => {
    const cardLoading = spin || isLoading;
    let classStatus = 'loading';
    let description = 'Checking...';
    let link;

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
      link = response.url;
    }

    return (
      <a
        ref={cardRef}
        className={'card ' + classStatus}
        href={link}
        target={cardLoading ? undefined : '_blank'}
        rel="noopener noreferrer"
      >
        <div className="card-body">
          <div className="meta-title">{serviceName}</div>
          <div className="description">
            <span>{description}</span>
          </div>
        </div>
      </a>
    );
  }, [isLoading, response, serviceName, spin]);
}
