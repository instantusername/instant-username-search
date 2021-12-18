import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'debounce';
import SortableResultCard from './SortableResultCard';
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
            <SortableResultCard
              key={service}
              serviceName={service}
              checkEndpoint={endpointWithUsername}
              ready={effectiveUsername.length > 0}
            />
          );
        })}
      </div>
    </>
  );
}
