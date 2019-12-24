/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/Results.css';
import ResultCard from './ResultCard';

export default function Results({ username, services }) {
  const cards = services.map(service => {
    return (
      <ResultCard
        username={username}
        serviceName={service.service}
        endpoint={`${window.apiUrl}check/${service.service}/${username}/`}
        key={service.service}
      />
    );
  });

  return <div className="results">{cards}</div>;
}
