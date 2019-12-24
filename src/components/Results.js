/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import '../styles/Results.css';
import ResultCard from './ResultCard';

export default function Results({ username }) {
  useEffect(() => {
    return () => {
      console.log('results unmounted');
    };
  });
  return (
    <div className="results">
      <ResultCard
        username={username}
        serviceName="Instagram"
        endpoint={`http://localhost:8080/check/instagram/${username}/`}
        key="Instagram"
      />
      <ResultCard
        username={username}
        serviceName="Facebook"
        endpoint={`http://localhost:8080/check/facebook/${username}/`}
        key="Facebook"
      />
    </div>
  );
}
