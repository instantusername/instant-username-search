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
        defaultMessage="You can easily test & find the best suitable username for your next endevour"
      />
    ),
    image: require('../resources/idea.svg'),
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
        defaultMessage="You can easily search on 100+ platforms for your username. Also, you can use advanced search to narrow down your results"
      />
    ),
    image: require('../resources/search.svg'),
  },
  {
    id: 'instant',
    header: <FormattedMessage id="whyUs.row.instant.header" defaultMessage="Ready to start?" />,
    details: (
      <FormattedMessage
        id="whyUs.row.instant.details"
        defaultMessage="So, you found your new username and would love to register them. If you like, we can automate it for you! (Coming soon)"
      />
    ),
    image: require('../resources/servant.svg'),
  },
];

export default function Landing() {
  return (
    <div className="landing">
      <WhyUs headerConfig={whyUsHeader} rows={whyUsRows} />
      <NewsletterSubscription illustrationEnabled />
      <Donations />
    </div>
  );
}
