import React from 'react';

import '../styles/WhyUs.css';

export default function WhyUs({ headerConfig, rows }) {
  return (
    <div className="whyus-container">
      {headerConfig?.enabled && (
        <div className="whyus-header">
          <h2>{headerConfig?.headerText}</h2>
          <p>{headerConfig?.subText}</p>
        </div>
      )}

      {rows.map((r, i) => (
        <div key={r.id} className={i % 2 === 0 ? 'whyus-row' : 'whyus-reverse-row'}>
          <div className="whyus-column whyus-image-column">
            <img src={r.image} alt={r.header} />
          </div>
          <div className="whyus-column whyus-text-column">
            <h3>{r.header}</h3>
            <p>{r.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
