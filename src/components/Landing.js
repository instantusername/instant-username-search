import React from 'react';
import { FormattedMessage } from 'react-intl';

import WhyUs from './WhyUs';
import NewsletterSubscription from './NewsletterSubscription';
import Donations from './Donation';

import '../styles/Landing.css';

const whyUsHeader = {
  enabled: true,
  headerText: (
    <FormattedMessage id="whyUs.header.header" defaultMessage="Expand your brand across the web" />
  ),
  subText: <FormattedMessage id="whyUs.header.sub" defaultMessage="Find your next username" />,
};

const whyUsRows = [
  {
    id: 'benefits',
    header: (
      <FormattedMessage
        id="whyUs.row.benefit.header"
        defaultMessage="A new idea? We got your back!"
      />
    ),
    details: (
      <FormattedMessage
        id="whyUs.row.benefit.details"
        defaultMessage="Easily test & find the most suitable username for your next endevour."
      />
    ),
    image: require('../resources/sun.svg'),
  },
  {
    id: 'platforms',
    header: (
      <FormattedMessage
        id="whyUs.row.platforms.header"
        defaultMessage="One click to see them all"
      />
    ),
    details: (
      <FormattedMessage
        id="whyUs.row.platforms.details"
        defaultMessage="Instantly search on 100+ platforms for your username. Register the same username everywhere."
      />
    ),
    image: require('../resources/telescope.svg'),
  },
  {
    id: 'instant',
    header: <FormattedMessage id="whyUs.row.instant.header" defaultMessage="Ready to start?" />,
    details: (
      <FormattedMessage
        id="whyUs.row.instant.details"
        defaultMessage="So, you found your new username and would love to register them? Let us do the dirty work for you! (Coming soon)"
      />
    ),
    image: require('../resources/moon-rover.svg'),
  },
];

export default function Landing() {
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
