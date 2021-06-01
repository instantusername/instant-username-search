import React from 'react';

import '../styles/Donation.css';

export default function Donation() {
  return (
    <div className="donation-container">
      <div className="donation-illustration">
        <img src={require('../resources/thumbs-up.png')} alt="Donation illustration" />
      </div>
      <div className="donation-body">
        <h2>Enjoying the service?</h2>
        <p>
          We are more than happy to help you to find your online usernames with ease. In order to
          sustain it, we are accepting donations. It will help us to pay various expenses to run
          this service and provide it to everyone. So, if you find our service helpful please
          consider donating us!
        </p>
        <div className="donation-optionsRow">
          <div className="donation-option"></div>
          <div className="donation-option"></div>
          <div className="donation-option"></div>
        </div>
      </div>
    </div>
  );
}
