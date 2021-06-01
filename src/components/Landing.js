import React from 'react';
import { FormattedMessage } from 'react-intl';

import WhyUs from './WhyUs';
import NewsletterSubscription from './NewsletterSubscription';
import FrequentQuestions from './FrequentQuestions';
import Donations from './Donation';

import '../styles/Landing.css';

export default function Landing() {
  const whyUsHeader = {
    enabled: true,
    headerText: 'Find your next username',
    subText: 'Expand your brand across the web',
  };

  const whyUsRows = [
    {
      id: 'benefits',
      header: 'A new idea? We got your back!',
      details: 'You can easily test & find the best suitable username for your next endevour',
      image: require('../resources/idea.svg'),
    },
    {
      id: 'platforms',
      header: 'One click to see them all',
      details:
        'You can easily search on 100+ platforms for your username. Also, you can use advanced search to narrow down your results',
      image: require('../resources/search.svg'),
    },
    {
      id: 'instant',
      header: 'Ready to start?',
      details:
        'So, you found your new username and would love to register them. If you like, we can automate it for you!',
      image: require('../resources/servant.svg'),
    },
  ];

  const frequentlyAskedQuestions = [
    {
      question: 'Some question',
      answer:
        'Think of the name you want to register. The answer is typically your company or website name. It is best to keep your domain name short and easy to understand. Say it out loud, and make sure it sounds great. Next, search to see if it is available. If the name you desire is taken with the .com top-level domain, there are hundreds of others available. Finally, add the top choices to your cart and complete the domain registration.',
    },
    {
      question: 'Another question',
      answer:
        'Think of the name you want to register. The answer is typically your company or website name. It is best to keep your domain name short and easy to understand. Say it out loud, and make sure it sounds great. Next, search to see if it is available. If the name you desire is taken with the .com top-level domain, there are hundreds of others available. Finally, add the top choices to your cart and complete the domain registration.',
    },
    {
      question: 'Another question with another answer',
      answer:
        'Think of the name you want to register. The answer is typically your company or website name. It is best to keep your domain name short and easy to understand. Say it out loud, and make sure it sounds great. Next, search to see if it is available. If the name you desire is taken with the .com top-level domain, there are hundreds of others available. Finally, add the top choices to your cart and complete the domain registration.',
    },
    {
      question: 'Another question with different answer',
      answer:
        'Think of the name you want to register. The answer is typically your company or website name. It is best to keep your domain name short and easy to understand. Say it out loud, and make sure it sounds great. Next, search to see if it is available. If the name you desire is taken with the .com top-level domain, there are hundreds of others available. Finally, add the top choices to your cart and complete the domain registration.',
    },
  ];

  return (
    <>
      <div className="landing">
        <WhyUs headerConfig={whyUsHeader} rows={whyUsRows} />
        <NewsletterSubscription illustrationEnabled />
        <FrequentQuestions questions={frequentlyAskedQuestions} />
        <Donations />
      </div>

      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2749239984003144"
        data-ad-slot="2360118035"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </>
  );
}
