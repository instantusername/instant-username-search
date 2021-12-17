import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'debounce';
import ResultCard from './ResultCard';

import '../styles/Results.css';

export default function Results({ username, services, setServices }) {
  const [effectiveUsername, setEffectiveUsername] = useState('');

  const setEffectiveUsernameDebounced = useCallback(
    debounce(username => {
      setEffectiveUsername(username);
    }, 800),
    [],
  );

  useEffect(() => {
    setEffectiveUsername('');
    setEffectiveUsernameDebounced(username);
  }, [username, setEffectiveUsernameDebounced]);

  return (
    <>
      <div className="results">
        {services.map(({ service, endpoint }) => {
          const endpointWithUsername = endpoint.replace('{username}', effectiveUsername);
          return (
            <ResultCard
              key={service}
              spin={effectiveUsername.length === 0}
              serviceName={service}
              checkEndpoint={endpointWithUsername}
            />
          );
        })}
      </div>
    </>
  );
}
