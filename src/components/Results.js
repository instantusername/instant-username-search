/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';
import '../styles/Results.css';
import ResultCard from './ResultCard';

export default function Results({ username, services, isLoading }) {
  const cards = useMemo(
    () =>
      services.map(service => (
        <ResultCard
          username={username}
          serviceName={service.service}
          endpoint={`${window.apiUrl}check/${service.service}/${username}/`}
          key={service.service}
          spin={isLoading}
        />
      )),
    [username, services, isLoading],
  );

  return useMemo(() => <div className="results">{cards}</div>, [cards]);
}
