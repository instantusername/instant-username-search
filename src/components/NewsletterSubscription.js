import React from 'react';
import { Input } from 'antd';

import '../styles/NewsletterSubscription.css';

export default function NewsletterSubscription({ illustrationEnabled = false }) {
  return (
    <div className="newsletterSubscription-container">
      {illustrationEnabled && (
        <div className="newsletterSubscription-illustration">
          <div className="newsletterSubscription-imageWrapper">
            <img src={require('../resources/newsletter.png')} alt="Newsletter illustration" />
          </div>
        </div>
      )}
      <div className="newsletterSubscription-body">
        <h2>Get in touch</h2>
        <p>
          Get all the latest offers and news to your mailbox every month. You can cancel it anytime.
        </p>
      </div>
      <div className="newsletterSubscription-input">
        <Input.Search placeholder="Your mail address" enterButton="Subscribe"></Input.Search>
      </div>
    </div>
  );
}
