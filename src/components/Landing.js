import React from 'react';
import Privacy from './Privacy';
import Terms from './Terms';
import WhyUs from './WhyUs';
import NewsletterSubscription from './NewsletterSubscription';
import Donations from './Donation';

import '../styles/Landing.css';

const whyUsHeader = {
  enabled: true,
  headerText: 'Get the same username everywhere!',
  subText:
    'Instant Username Search will check more than 100 social media sites and let you know if your dream username is available there. Results will appear here as you type.',
};

const whyUsRows = [
  {
    id: 'benefits',
    header: 'A new idea? We got your back!',
    details: 'Easily test and find the most suitable username for your next endevour.',
    image: require('../resources/sun.svg'),
  },
  {
    id: 'platforms',
    header: 'One tool to check them all',
    details:
      'Instantly search on more than 100 platforms for your next username. Register the same username on every social media platform to get easily recognized.',
    image: require('../resources/telescope.svg'),
  },
  {
    id: 'instant',
    header: 'Ready to start?',
    details:
      'So, you found your new username and would love to register them? Let us do the dirty work for you! (Coming soon)',
    image: require('../resources/space-shuttle-2.svg'),
  },
];

export default function Landing({ page }) {
  switch (page) {
    case 'privacy':
      return (
        <div className="container" id="content">
          <Privacy />
        </div>
      );

    case 'terms':
      return (
        <div className="container" id="content">
          <Terms />
        </div>
      );

    default:
      return (
        <div className="landing">
          <div className="container" id="whyUs">
            <WhyUs headerConfig={whyUsHeader} rows={whyUsRows} />
          </div>
          <div id="newsletter-wrapper">
            <div className="container" id="newsLetter">
              <NewsletterSubscription illustrationEnabled />
            </div>
          </div>
          <div className="container" id="donations">
            <Donations />
          </div>
        </div>
      );
  }
}
