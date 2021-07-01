import React, { useState, useCallback, useEffect } from 'react';
import { Input } from 'antd';

import { validateEmail } from '../utils/validators';
import config from '../config';

import '../styles/NewsletterSubscription.css';

export default function NewsletterSubscription({ illustrationEnabled = false }) {
  const [subscriptionInfo, setSubscriptionInfo] = useState(null);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  const [isInputValid, setInputValid] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubscription = useCallback(async email => {
    if (!email || !validateEmail(email)) {
      setInputValid(false);
      setSubscriptionInfo({ message: 'invalid' });

      return;
    }

    setInputValid(true);
    setLoading(true);

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

    setLoading(false);
  }, []);

  useEffect(() => {
    // const { message } = subscriptionInfo;
    switch (subscriptionInfo?.message) {
      case 'subscribed':
        setSubscriptionMessage('Yay! You have subscribed to our newsletter');
        break;
      case 'existing_subscription':
        setSubscriptionMessage('You already have an existing subscription to our newsletter');
        break;
      case 'server_exception':
        setSubscriptionMessage('Something went wrong, we are working on it...');
        break;
      case 'invalid':
        setSubscriptionMessage('Email seems to be invalid.');
        break;
      default:
        setSubscriptionMessage('An error happened ¯\\_(ツ)_/¯');
        break;
    }
  }, [subscriptionInfo]);

  console.log();

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
          loading={loading}
          disabled={loading}
        ></Input.Search>
        <span
          className={`newsletterSubscription-flashMessage ${
            subscriptionInfo ? 'messageReceived' : ''
          }`}
        >
          {subscriptionMessage}
        </span>
      </div>
    </div>
  );
}
