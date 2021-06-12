import React, { useState, useCallback } from 'react';
import { Input } from 'antd';

import { validateEmail } from '../utils/validators';

import '../styles/NewsletterSubscription.css';

export default function NewsletterSubscription({ illustrationEnabled = false }) {
  const [subscriptionInfo, setSubscriptionInfo] = useState(null);
  const [isInputValid, setInputValid] = useState(true);

  const handleNewsletterSubscription = useCallback(async email => {
    if (!email || !validateEmail(email)) {
      setInputValid(false);

      return;
    }

    setInputValid(true);

    // send request to subscriptionHandler
    const subscriptionStatus = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ status: true, message: 'subscribed' });
      }, 1500);

      // case: email address already subscribed
      // setTimeout(() => {
      //   resolve({ status: true, message: 'existing_subscription' });
      // }, 1500);
    }).catch(err => {
      return { status: false, message: 'server_exception' };
    });

    setSubscriptionInfo(subscriptionStatus);

    // clears the flash message
    setTimeout(() => {
      setSubscriptionInfo(null);
    }, 2000);
  }, []);

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
        <Input.Search
          className={`ant-newsletterInput ${!isInputValid ? 'invalidInput' : ''}`}
          placeholder="Your mail address"
          enterButton="Subscribe"
          onSearch={handleNewsletterSubscription}
        ></Input.Search>
        <span
          className={`newsletterSubscription-flashMessage ${
            subscriptionInfo ? 'messageReceived' : ''
          }`}
        >
          {(subscriptionInfo && subscriptionInfo.message) || 'Placeholder'}
        </span>
      </div>
    </div>
  );
}
