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
              <div className="donation-content">
                <img src={require('../resources/bmc-coffee.svg')} alt="Buy me a coffee!" />
                <span>Buy us a coffee!</span>
              </div>
            </Card>
          </a>
        </div>
        <div className="donation-option">
          <a target="_blank" rel="noopener noreferrer" href="https://instantusername.com/#/">
            <Card hoverable>
              <div className="donation-content">
                <img src={require('../resources/bitcoin.svg')} alt="Donate cryptocurrency" />
                <span>Donate cryptocurrency</span>
              </div>
            </Card>
          </a>
        </div>
      </div>
    </div>
  );
}
