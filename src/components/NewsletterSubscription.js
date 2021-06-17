import React, { useState, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { Input } from 'antd';

import { validateEmail } from '../utils/validators';
import config from '../config';

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

    let subscriptionStatus;

    try {
      subscriptionStatus = await (
        await fetch(config.endpoints.newsletterSubscription, {
          method: 'POST',
          mode: 'cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        })
      ).json();
    } catch (error) {
      subscriptionStatus = { status: false, message: 'server_exception' };
    }

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
            <img src={require('../resources/radar-1.svg')} alt="Newsletter illustration" />
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
          <FormattedMessage
            id={`newsletterSubscription.${subscriptionInfo?.message}`}
            defaultMessage="Unkown error occured"
          />
        </span>
      </div>
    </div>
  );
}
