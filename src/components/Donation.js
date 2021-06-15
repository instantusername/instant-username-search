import React from 'react';
import { FormattedMessage } from 'react-intl';

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
          this service and provide it to everyone. If you find our service helpful, consider
          supporting us!
        </p>
        <div className="donation-optionsRow">
          <div className="donation-option">
            <div className="bmc">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.buymeacoffee.com/1ulP4IGFm"
              >
                <img
                  src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
                  alt="Buy me a coffee!"
                />
                <span>
                  <FormattedMessage id="app.coffee" defaultMessage="Buy me a coffee" />
                </span>
              </a>
            </div>
          </div>
          <div className="donation-option">
            <div className="cryptocurrency">
              <img src={require('../resources/bitcoin.svg')} alt="Buy me a coffee!" />
              Donate cryptocurrency <br></br> (Coming soon)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
