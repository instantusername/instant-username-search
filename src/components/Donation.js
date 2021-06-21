import React from 'react';
import { Card } from 'antd';

import '../styles/Donation.css';

export default function Donation() {
  return (
    <div className="donation-container">
      <div className="donation-illustration">
        <img src={require('../resources/astronaut.svg')} alt="Donation illustration" />
      </div>
      <div className="donation-body">
        <h2>Enjoying the service?</h2>
        <p>
          We are more than happy to help you find your online usernames with ease. In order to
          sustain the service, we are accepting donations. It will help us pay various expenses to
          run this service and provide it to everyone for free. If you find our service helpful,
          consider supporting us!
        </p>
      </div>
      <div className="donation-optionsRow">
        <div className="donation-option">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.buymeacoffee.com/1ulP4IGFm"
          >
            <Card className="donation-card" hoverable>
              <img
                src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
                alt="Buy me a coffee!"
              />
              <span>Buy us a coffee!</span>
            </Card>
          </a>
        </div>
        <div className="donation-option">
          <a target="_blank" rel="noopener noreferrer" href="https://instantusername.com/#/">
            <Card className="donation-card" hoverable>
              <img src={require('../resources/bitcoin.svg')} alt="Buy me a coffee!" />
              <span>Donate cryptocurrency</span>
            </Card>
          </a>
        </div>
      </div>
    </div>
  );
}
